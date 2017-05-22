import {Injectable}                               from '@angular/core';
import {Http, Response}                           from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {QuickDeposit}                             from './quick-deposit';

import {AppSettings}                              from '../app.config';
import  {requestOptionsProvider}                  from  '../default-request-option.service';

@Injectable()
export class QuickDepositService {

    private urlPostQuickDeposit = AppSettings.API_ENDPOINT + 'Wallet/Deposit'; // This is the API Endpoint for POST Deposit

    constructor(private http: Http) {
    }

    /**
     * @param quickDeposit
     * @returns {Observable<QuickDeposit>}
     * POST Deposit Bank
     */
    quickDeposit(quickDeposit: QuickDeposit): Observable<QuickDeposit> {

        return this.http
            .post(this.urlPostQuickDeposit, quickDeposit, requestOptionsProvider)
            .map(this.extractData)
            .catch(this.handleError)
    }

    /**
     *
     * @param res
     * @returns {any}
     */
    private extractData(res: Response) {
        let body = res.json();
        let bodyData = body.Data;
        let rejectMsg: {};

        rejectMsg = {
            bodyStatus: body.Status,
            Error: body.Messages.Errors,
        };


        return rejectMsg || {};
    }


    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    private handleError(error: Response | any) {

        if(error.status == 403) {
            console.log('test');
            localStorage.removeItem('TokenId');
            location.replace('/login');
        }

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