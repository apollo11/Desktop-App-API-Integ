import {Injectable}                               from '@angular/core';
import {Http, Response}                           from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';


import {BankAccount}                              from './quick-deposit-bank-account';

import {AppSettings}                              from '../app.config';
import {requestOptionsProvider}                   from  '../default-request-option.service';

@Injectable()
export class QuickDepositBankAccountService {

    private urlGetBankAccount = AppSettings.API_ENDPOINT + 'Wallet/SuggestedBankAccount'; //with parameter paymentMethod  and bankId    // This is the API Endpoint for Get Bank Account Info
    constructor(private http: Http) {
    }

    /**
     *
     * @param id
     * @returns {Observable<BankAccount[]>}
     */
    getBankAccount(paymentMethodId: string,bankId: string): Observable<BankAccount[]> {
        return this.http
            .get(this.urlGetBankAccount +`?paymentMethod=${paymentMethodId}&bankId=${bankId}`, requestOptionsProvider)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     *
     * @param res
     * @returns {any}
     */
    private extractData(res: Response) {

        let body = res.json();
        let data = body.Data;
        let rejectMsg: string;

        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        } else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }

        return data;
    }

    /**
     *
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError(error: Response | any) {

        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}