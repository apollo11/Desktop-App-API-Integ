import {Component, OnInit}                  from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {OnlineDepositBank}                  from './online-deposit-bank';
import {OnlineDepositBankService}           from './online-deposit-bank.service';

@Component({
    moduleId: module.id,
    selector: 'app-deposit',
    templateUrl: 'online-deposit-bank.component.html',
    styleUrls: ['online-deposit-bank.component.css'],
    providers: [OnlineDepositBankService]
})
export class OnlineDepositBankComponent implements OnInit {

    onlineDepositBanks: OnlineDepositBank[];
    errorMessage: string;
    successMessage: string;


    constructor(private onlineDepositBankService: OnlineDepositBankService) {
    }

    /**
     * Get Online Deposit Banks
     */
    getOnlineDepositBank() {
        this.onlineDepositBankService.getOnlineDepositBank()
            .subscribe(
                successMessage => this.successMessage =  <any>successMessage,
                error => this.errorMessage = <any>error);
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.onlineDepositBanks);
    }

    ngOnInit() {
        this.getOnlineDepositBank();
    }

}
