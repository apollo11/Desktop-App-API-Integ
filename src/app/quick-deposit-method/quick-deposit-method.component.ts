import {Component, OnInit}                  from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {QuickDepositMethod}                 from './quick-deposit-method';
import {QuickDepositMethodService}          from './quick-deposit-method.service';

@Component({
    moduleId: module.id,
    selector: 'app-quick-deposit-bank',
    templateUrl: 'quick-deposit-method.component.html',
    styleUrls: ['quick-deposit-method.component.css'],
    providers: [QuickDepositMethodService]
})
export class QuickDepositMethodComponent implements OnInit {

    quickDepositMethods: QuickDepositMethod[];
    errorMessage: string;

    constructor(private quickDepositMethodService: QuickDepositMethodService) {
    }

    /**
     * Get Quick Deposit Banks
     */
    getQuickDepositMethod() {
        this.quickDepositMethodService.getQuickDepositMethod()
            .subscribe(
                quickDepositMethods => this.quickDepositMethods = quickDepositMethods,
                error => this.errorMessage = <any>error);
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.getQuickDepositMethod);
    }

    ngOnInit() {
        this.getQuickDepositMethod();
    }

}
