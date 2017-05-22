import {Component, OnInit}                        from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {BankAccount}                              from './quick-deposit-bank-account';
import {QuickDepositBankAccountService}           from './quick-deposit-bank-account.service';

import {QuickDepositMethod}                 from '../quick-deposit-method/quick-deposit-method';
import {QuickDepositMethodService}          from '../quick-deposit-method/quick-deposit-method.service';

import {QuickDepositPreferredBank}          from '../quick-deposit-preferred-bank/quick-deposit-preferred-bank';
import {QuickDepositPreferredBankService}   from '../quick-deposit-preferred-bank/quick-deposit-preferred-bank.service';

@Component({
  moduleId: module.id,
  selector: 'app-quick-deposit-bank-account',
  templateUrl: './quick-deposit-bank-account.component.html',
  styleUrls: ['./quick-deposit-bank-account.component.css'],
  providers: [
    QuickDepositBankAccountService
    , QuickDepositMethodService
    , QuickDepositPreferredBankService
  ]
})
export class QuickDepositBankAccountComponent implements OnInit {
  bankAccounts: BankAccount[];
  quickDepositMethods: QuickDepositMethod[];
  quickDepositPreferredBanks: QuickDepositPreferredBank[];
  errorMessage: string;

  constructor(private quickDepositBankAccountService: QuickDepositBankAccountService,
              private quickDepositMethodService: QuickDepositMethodService,
              private quickDepositPreferredBankService: QuickDepositPreferredBankService) { }

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
    this.quickDepositBankAccountService.getBankAccount(paymentMethodId,bankId)
        .subscribe(
            bankAccounts => this.bankAccounts = bankAccounts,
            error => this.errorMessage = <any>error);
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.bankAccounts);
  }

  ngOnInit() {
    this.getQuickDepositMethod();
    this.getQuickDepositPreferredBank();
  }

}
