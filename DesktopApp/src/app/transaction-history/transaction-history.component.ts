import {Component, OnInit} from '@angular/core';

import {TransactionHistoryService}      from './transaction-history.service';
import {TransactionHistory}             from './transaction-history';
import {IMyOptions, IMyDateModel} from 'mydatepicker';

@Component({
    moduleId: module.id,
    selector: 'app-transaction-history',
    templateUrl: './transaction-history.component.html',
    styleUrls: ['./transaction-history.component.css'],
    providers: [
        TransactionHistoryService
    ]
})
export class TransactionHistoryComponent implements OnInit {

    error: any;
    success: any;
    date: any;
    dateGet: string;
    startDate: string;
    endDate: string;
    transactHistory = new TransactionHistory();
    submitting: boolean = false;

    constructor(private transactionHistoryService: TransactionHistoryService) {
    }

    getTransaction(transact: TransactionHistory) {

        this.submitting = true;
        transact.StartDate = this.startDate;
        transact.EndDate = this.endDate;

        this.transactionHistoryService.getTransactionHistory(transact)
            .subscribe(
                success => {
                    this.success = <any>success;
                    this.submitting = false;
                },
                error => {
                    this.error = <any>error;
                    this.submitting = false;
                }
            )
    }

    private myDatePickerOptions: IMyOptions = {
        dateFormat: 'yyyy-mm-dd',
        //"0001-01-01T00:00:00"
        showSelectorArrow: false,
        //inputAutoFill: false,
        showTodayBtn: false,
        editableDateField: false,
        showClearDateBtn: false,
        openSelectorOnInputClick: true,
        height: 'auto',
        selectionTxtFontSize: '12px'
    };

    onStartDateChanged(event: IMyDateModel) {
        this.startDate = event.formatted;
    }

    onEndDateChanged(event: IMyDateModel) {
        this.endDate = event.formatted;
    }

    defaultDateValue() {
        var now = new Date();
        now.setFullYear(now.getFullYear() - 0);
        this.dateGet = now.getFullYear() + "-" + ("0" + (now.getMonth() + 1)).slice(-2) + "-" + ("0" + now.getDate()).slice(-2);
        this.startDate = this.dateGet;
        this.endDate = this.dateGet;
    }

    ngOnInit() {
        this.defaultDateValue();
    }

}
