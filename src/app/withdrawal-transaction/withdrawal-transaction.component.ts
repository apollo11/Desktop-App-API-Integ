import {Component, OnInit}                  from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {WithdrawalTransaction}              from './withdrawal-transaction';
import {WithdrawalTransactionService}       from './withdrawal-transaction.service';

@Component({
    moduleId: module.id,
    selector: 'app-withdrawal-transaction',
    templateUrl: './withdrawal-transaction.component.html',
    styleUrls: ['./withdrawal-transaction.component.css'],
    providers: [WithdrawalTransactionService]
})
export class WithdrawalTransactionComponent implements OnInit {

    withdrawalTransactions: WithdrawalTransaction[];
    errorMessage: string;
    successMessage: string;

    constructor(private withdrawalTransactionService: WithdrawalTransactionService) {
    }

    /**
     * Get Withdrawal Transaction
     */
    getWithdrawalTransaction() {
        this.withdrawalTransactionService.getWithdrawalTransaction()
            .subscribe(
                withdrawalTransactions => {
                 let transaction = <any>withdrawalTransactions;
                 this.withdrawalTransactions = transaction.Withdrawals;
                },
                error => this.errorMessage = <any>error);
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.getWithdrawalTransaction);
    }

    ngOnInit() {
        this.getWithdrawalTransaction();
    }

}