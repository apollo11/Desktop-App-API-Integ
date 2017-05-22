import { Component, OnInit }    from '@angular/core';
import { Location }             from '@angular/common';
import {Router}                 from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Withdrawal } from './withdrawal';
import { WithdrawalService } from './withdrawal.service';

import { Profile } from '../profile/profile';
import { ProfileService } from '../profile/profile.service';

import { WithdrawalTransaction } from '../withdrawal-transaction/withdrawal-transaction';
import { WithdrawalTransactionService } from '../withdrawal-transaction/withdrawal-transaction.service';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
    moduleId: module.id,
    selector: 'app-withdrawal',
    templateUrl: './withdrawal.component.html',
    styleUrls: ['./withdrawal.component.css'],
    providers: [
        WithdrawalService,
        ProfileService,
        WithdrawalTransactionService
    ]
})
export class WithdrawalComponent implements OnInit {
    profile: Profile[];
    withdraw = new Withdrawal();
    withdrawalTransactions: WithdrawalTransaction[];
    error: string;
    success: string;
    dataError: any = [];
    valid: boolean;
    lockedAmount: string;
    WithdrawalAmt: string;
    submitted: boolean = false;

    // submit button default state
    submitting: boolean = false;
    accountAtivated: any;

    constructor(
        private withdrawalService: WithdrawalService,
        private profileService: ProfileService,
        private withdrawalTransactionService: WithdrawalTransactionService,
        private location: Location,
        private router: Router,
        private mScrollbarService: MalihuScrollbarService
    ) {}

    /**
     *Get Profile Information
     */
    getProfile() {
        this.profileService.getProfile()
            .subscribe(
                profile => {
                this.profile = <any>profile;
                let data = <any>profile;
                this.accountAtivated = data.IsAccountActivated;
                let bank = data.PlayerBankAccounts;
                if (this.accountAtivated == false) {
                    this.router.navigate(['/profile']);
                }else if(this.accountAtivated) {
                    if(bank.length == 0) {
                        this.router.navigate(['/bank-add']);
                    }
                }

            },
                error => this.error = <any>error);
    }

    /**
     * Get Withdrawal Transaction
     */
    getWithdrawalTransaction() {
        this.withdrawalTransactionService.getWithdrawalTransaction()
            .subscribe(
            withdrawalTransactions => {
                let history = <any>withdrawalTransactions;
                this.lockedAmount = history.TotalLockAmountAmount;
                this.WithdrawalAmt = history.WithdrawableAmount;
                this.withdrawalTransactions = history.Withdrawals;
            },
            error => this.error = <any>error);
    }

    /**
     * @param withdrawal
     * Make Withdrawal
     */
    makeWithrawal(withdrawal: Withdrawal) {
        this.submitted = true;
        this.submitting = true;
        this.withdrawalService.makeWithrawal(withdrawal)
            .subscribe(
            success =>{
                this.success = <any>success;
                let data = <any>success;
                let bodyData = data.bodyStatus;
                this.dataError = data.Error;
                this.submitting = false;
                if(bodyData == 'SUCCESS') {
                    this.valid = true;
                    this.router.navigate(['/withdrawal-transaction']);
                }else {
                    this.valid = false;
                }
            },
            error => {
                this.error = <any>error;
                this.submitting = false;
            });
    }



    // Go back to previous location
    goBack() {
        this.location.back();
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.withdraw);
    }

    ngAfterViewChecked() {
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    }

    ngOnInit() {
        this.getProfile();
        this.getWithdrawalTransaction();
    }

}
