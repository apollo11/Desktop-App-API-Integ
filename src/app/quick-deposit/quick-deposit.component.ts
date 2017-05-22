import {Component, OnInit}                          from '@angular/core';
import{Router}                                      from '@angular/router';

import 'rxjs/add/operator/toPromise';

import {QuickDeposit}                               from './quick-deposit';
import {QuickDepositService}                        from './quick-deposit.service';

import {QuickDepositMethod}                         from '../quick-deposit-method/quick-deposit-method';
import {QuickDepositMethodService}                  from '../quick-deposit-method/quick-deposit-method.service';

import {QuickDepositPreferredBank}                  from '../quick-deposit-preferred-bank/quick-deposit-preferred-bank';
import {QuickDepositPreferredBankService}           from '../quick-deposit-preferred-bank/quick-deposit-preferred-bank.service';

import {BankAccount}                                from '../quick-deposit-bank-account/quick-deposit-bank-account';
import {QuickDepositBankAccountService}             from '../quick-deposit-bank-account/quick-deposit-bank-account.service';

import {UdaId}                                      from '../quick-deposit-generate-uda-id/quick-deposit-generate-uda-id';
import {QuickDepositGenerateUdaIdService}           from '../quick-deposit-generate-uda-id/quick-deposit-generate-uda-id.service';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
    moduleId: module.id,
    selector: 'app-quick-deposit',
    templateUrl: './quick-deposit.component.html',
    styleUrls: ['./quick-deposit.component.css'],
    providers: [
        QuickDepositService
        , QuickDepositMethodService
        , QuickDepositPreferredBankService
        , QuickDepositBankAccountService
        , QuickDepositGenerateUdaIdService
    ]
})
export class QuickDepositComponent implements OnInit {
    udaIds: UdaId[];
    udaId = new UdaId();

    getPaymentMethodId: string;
    getBankAccountId: any;
    getDepositAmount: string;

    bankAccounts: BankAccount[];
    quickDepositPreferredBanks: QuickDepositPreferredBank[];
    quickDeposits = new QuickDeposit();
    quickDepositMethods: QuickDepositMethod[];
    error: string;
    success: string;
    dataError: any = [];
    valid: boolean;

    // submit button default state
    submitting: boolean = false;

    constructor(
        private quickDepositMethodService: QuickDepositMethodService,
        private quickDepositService: QuickDepositService,
        private quickDepositPreferredBankService: QuickDepositPreferredBankService,
        private quickDepositBankAccountService: QuickDepositBankAccountService,
        private quickDepositGenerateUdaIdService: QuickDepositGenerateUdaIdService,
        private mScrollbarService: MalihuScrollbarService,
        private router:Router,
    ) {}


    /**
     * Get Quick Deposit Banks
     */
    getQuickDepositMethod() {
        this.quickDepositMethodService.getQuickDepositMethod()
            .subscribe(
                quickDepositMethods => {
                    this.quickDepositMethods = quickDepositMethods;
                },
                error => this.error = <any>error);
    }

    /**
     * Get Quick Deposit Preferred Bank
     */
    getQuickDepositPreferredBank() {
        this.quickDepositPreferredBankService.getQuickDepositPreferredBank()
            .subscribe(
                quickDepositPreferredBanks => this.quickDepositPreferredBanks = quickDepositPreferredBanks,
                error => this.error = <any>error);
    }

    /**
     * @param quickDeposit
     * Insert Quick Deposit
     */
    quickDeposit(quickDeposit: QuickDeposit, generatedUdaId: string) {

        this.submitting = true;

        quickDeposit.UDAId = generatedUdaId;
        quickDeposit.PaymentMethodId = this.getPaymentMethodId;
        quickDeposit.DepositAmount = this.getDepositAmount;
        quickDeposit.BankAccountId = this.getBankAccountId;

        this.quickDepositService.quickDeposit(quickDeposit)
            .subscribe(
                success =>{
                    this.success = <any>success;
                    let data = <any>success;
                    let bodyData = data.bodyStatus;
                    this.dataError = data.Error;
                    this.submitting = false;
                    if (bodyData == 'SUCCESS') {
                        this.valid = true;
                        this.router.navigate(['/deposit-history'])
                    } else {
                        this.valid = false;
                    }
                },
                error => {
                    this.error = <any>error;
                    this.submitting = false;
                });
    }

    /**
     * Get user bank list with ID Parameter
     */
    getBankAccount(paymentMethodId: string, bankId: string){
        this.getPaymentMethodId = paymentMethodId;
        this.quickDepositBankAccountService.getBankAccount(paymentMethodId,bankId)
            .subscribe(
                bankAccounts => {
                    this.bankAccounts = <any>bankAccounts;
                    let data = <any>bankAccounts;
                    this.getBankAccountId = data.Id;

                },
                error => this.error = <any>error);
    }

    /**
     * @param udaId
     * Get UDA id
     */
    getUdaId(udaId: UdaId) {

        udaId.PaymentMethodId = this.getPaymentMethodId;
        this.getDepositAmount = udaId.DepositAmount;

        this.quickDepositGenerateUdaIdService.getUdaId(udaId)
            .subscribe(
                success => this.udaIds = <any>success,
                error => this.error = <any>error);

    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.quickDeposits);
    }

    ngAfterViewChecked() {
        // console.log('afterInit casino');
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    }

    ngOnInit() {
        this.getQuickDepositMethod();
        this.getQuickDepositPreferredBank();
    }
}
