import {Injectable}                               from '@angular/core';
import {Headers, Http, Response, RequestOptions}  from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {QuickDepositPreferredBank}                from './quick-deposit-preferred-bank';

import {AppSettings}                              from '../app.config';
import  {requestOptionsProvider}                  from  '../default-request-option.service';

@Injectable()
export class QuickDepositPreferredBankService {

    private urlGetQuickDepositPreferredBank = AppSettings.API_ENDPOINT + 'Wallet/OfflineDepositBanks'; // This is the API Endpoint for getting the list for Player's Deposit Preferred Bank
    constructor(private http: Http) {
    }

    /**
     * @returns {Observable<R>}
     * GET Security Question
     */
    getQuickDepositPreferredBank(): Observable<QuickDepositPreferredBank[]> {
        return this.http
            .get(this.urlGetQuickDepositPreferredBank, requestOptionsProvider)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     * @param res
     * @returns {string{}}
     * Extract Body Response
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
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body reponse
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