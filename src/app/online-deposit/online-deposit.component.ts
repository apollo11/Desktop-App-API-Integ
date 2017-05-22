import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/toPromise';

import { OnlineDeposit } from './online-deposit';
import { OnlineDepositService } from './online-deposit.service';

import { OnlineDepositBank } from '../online-deposit-bank/online-deposit-bank';
import { OnlineDepositBankService } from '../online-deposit-bank/online-deposit-bank.service';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
    moduleId: module.id,
    selector: 'app-online-deposit',
    templateUrl: './online-deposit.component.html',
    styleUrls: ['./online-deposit.component.css'],
    providers: [OnlineDepositService,
        OnlineDepositBankService]
})

export class OnlineDepositComponent implements OnInit {
    onlineDeposit = new OnlineDeposit();
    onlineDepositBanks: OnlineDepositBank[];
    error: string;
    success: string;
    dataError: any = [];
    valid: boolean;
    submitted: boolean = false;

    // submit button default state
    submitting: boolean = false;

    constructor(
        private onlineDepositService: OnlineDepositService,
        private onlineDepositBankService: OnlineDepositBankService,
        private mScrollbarService: MalihuScrollbarService
    ) {}

    getOnlineDepositBank() {
        this.onlineDepositBankService.getOnlineDepositBank()
            .subscribe(
            onlineDepositBanks => this.onlineDepositBanks = onlineDepositBanks,
            error => this.error = <any>error);
    }

    /**
     * @param onlineDeposit
     */
    depositBank(onlineDeposit: OnlineDeposit) {
        this.submitted = true;
        this.submitting = true;

        this.onlineDepositService.depositBank(onlineDeposit)
            .subscribe(
            success => {
                this.success = <any>success;
                let data = <any>success;
                let bodyData = data.bodyStatus;
                this.dataError = data.Error;
                this.submitting = false;
                if (bodyData == 'SUCCESS') {
                    this.valid = true;
                    console.log(this.valid);
                } else {
                    this.valid = false;
                }
            },
            error => {
                this.error = <any>error;
                this.submitting = false;
            });
    }

    onCancel() {
        this.submitted = false;
    }

    resetForm() {
        this.submitted = false;
        // this.OnlineDepositBankForm.reset();
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.onlineDeposit);
    }

    ngAfterViewChecked() {
        // console.log('afterInit casino');
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    }

    ngOnInit() {
        this.getOnlineDepositBank();
    }
}
