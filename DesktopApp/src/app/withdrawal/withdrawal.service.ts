import {Injectable}                                 from '@angular/core';
import {Http, Response}                             from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                                 from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Withdrawal}                                 from './withdrawal';

import {AppSettings}                                from '../app.config';
import  {requestOptionsProvider}                    from  '../default-request-option.service';

@Injectable()
export class WithdrawalService {

   private urlPostWalletWithdraw = AppSettings.API_ENDPOINT + 'Wallet/Withdraw'; // This is the API Endpoint for Wallet Withdrawal

    constructor(private http: Http) {
    }

    /**
     * @param withdrawal
     * @returns {Observable<Withdrawal>}
     * POST Wallet Withdrawal
     */
    makeWithrawal(withdrawal: Withdrawal): Observable<Withdrawal> {

        return this.http
            .post(this.urlPostWalletWithdraw, withdrawal, requestOptionsProvider)
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