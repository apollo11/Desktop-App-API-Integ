import {Component, OnInit}                        from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {UdaId}                                    from './quick-deposit-generate-uda-id';
import {QuickDepositGenerateUdaIdService}         from './quick-deposit-generate-uda-id.service';

import {QuickDepositMethod}                       from '../quick-deposit-method/quick-deposit-method';
import {QuickDepositMethodService}                from '../quick-deposit-method/quick-deposit-method.service';

import {QuickDepositPreferredBank}                from '../quick-deposit-preferred-bank/quick-deposit-preferred-bank';
import {QuickDepositPreferredBankService}         from '../quick-deposit-preferred-bank/quick-deposit-preferred-bank.service';


import {BankAccount}                              from '../quick-deposit-bank-account/quick-deposit-bank-account';
import {QuickDepositBankAccountService}           from '../quick-deposit-bank-account/quick-deposit-bank-account.service';

@Component({
  moduleId: module.id,
  selector: 'app-quick-deposit-generate-uda-id',
  templateUrl: './quick-deposit-generate-uda-id.component.html',
  styleUrls: ['./quick-deposit-generate-uda-id.component.css'],
  providers: [
    QuickDepositGenerateUdaIdService
    , QuickDepositMethodService
    , QuickDepositPreferredBankService
    , QuickDepositBankAccountService
  ]
})
export class QuickDepositGenerateUdaIdComponent implements OnInit {
   udaIds: UdaId[];
  udaId = new UdaId();
  bankAccounts: BankAccount[];
  quickDepositMethods: QuickDepositMethod[];
  quickDepositPreferredBanks: QuickDepositPreferredBank[];
  errorMessage: string;
  getPaymentMethodId: string;
  constructor(private quickDepositGenerateUdaIdService: QuickDepositGenerateUdaIdService,
              private quickDepositMethodService: QuickDepositMethodService,
              private quickDepositPreferredBankService: QuickDepositPreferredBankService,
              private quickDepositBankAccountService: QuickDepositBankAccountService) { }


  /**
   * Get Quick Deposit Banks
   */
  getQuickDepositMethod() {
    this.quickDepositMethodService.getQuickDepositMethod()
        .subscribe(
            quickDepositMethods => this.quickDepositMethods = quickDepositMethods,
            error => this.errorMessage = <any>error);
  }

  /**
   * Get Quick Deposit Banks
   */
  getQuickDepositPreferredBank() {
    this.quickDepositPreferredBankService.getQuickDepositPreferredBank()
        .subscribe(
            quickDepositPreferredBanks => this.quickDepositPreferredBanks = quickDepositPreferredBanks,
            error => this.errorMessage = <any>error);
  }

  /**
   * Get user bank list with ID Parameter
   */
  getBankAccount(paymentMethodId: string,bankId: string){
    this.getPaymentMethodId = paymentMethodId;
    this.quickDepositBankAccountService.getBankAccount(paymentMethodId,bankId)
        .subscribe(
            bankAccounts => this.bankAccounts = bankAccounts,
            error => this.errorMessage = <any>error);
  }

  /**
   * @param udaId
   * Get UDA id
   */
  getUdaId(udaId: UdaId) {
    udaId.PaymentMethodId = this.getPaymentMethodId;
    this.quickDepositGenerateUdaIdService.getUdaId(udaId)
        .subscribe(
            success => this.udaIds = <any>success,
            error => this.errorMessage = <any>error);
  }

  // /**
  //  * Get user bank list with ID Parameter
  //  */
  // getUdaId(paymentMethodId: string,amount: string){
  //   this.quickDepositGenerateUdaIdService.getUdaId(paymentMethodId,amount)
  //       .subscribe(
  //           udaIds => this.udaIds = udaIds,
  //           error => this.errorMessage = <any>error);
  // }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.udaIds);
  }

  ngOnInit() {
    this.getQuickDepositMethod();
    this.getQuickDepositPreferredBank();
  }

}
