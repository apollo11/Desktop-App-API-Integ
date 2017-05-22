import { Component, OnInit }                from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {DepositTransaction}                 from './deposit-transaction';
import {DepositTransactionService}          from './deposit-transaction.service';

@Component({
  moduleId: module.id,
  selector: 'app-deposit-transaction',
  templateUrl: './deposit-transaction.component.html',
  styleUrls: ['./deposit-transaction.component.css'],
  providers: [DepositTransactionService]
})
export class DepositTransactionComponent implements OnInit {

  depositTransactions: DepositTransaction[];
  errorMessage: string;
  successMessage: string;

  constructor(private depositTransactionService: DepositTransactionService) { }

  /**
   * Get Deposit Transaction
   */
  getDepositTransaction() {
    this.depositTransactionService.getDepositTransaction()
        .subscribe(
            depositTransactions => this.depositTransactions = depositTransactions,
            error => this.errorMessage = <any>error);
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.depositTransactions);
  }

  ngOnInit() {
    this.getDepositTransaction();
  }

}