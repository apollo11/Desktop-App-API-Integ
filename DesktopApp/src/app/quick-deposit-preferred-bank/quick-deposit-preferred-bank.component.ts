import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {QuickDepositPreferredBank} from './quick-deposit-preferred-bank';
import {QuickDepositPreferredBankService} from './quick-deposit-preferred-bank.service';


@Component({
    moduleId: module.id,
    selector: 'app-quick-deposit-preferred-bank',
    templateUrl: './quick-deposit-preferred-bank.component.html',
    styleUrls: ['./quick-deposit-preferred-bank.component.css'],
    providers: [QuickDepositPreferredBankService]
})
export class QuickDepositPreferredBankComponent implements OnInit {

    quickDepositPreferredBanks: QuickDepositPreferredBank[];
    errorMessage: string;

    constructor(private quickDepositPreferredBankService: QuickDepositPreferredBankService) {
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

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.getQuickDepositPreferredBank);
    }

    ngOnInit() {
        this.getQuickDepositPreferredBank();
    }

}