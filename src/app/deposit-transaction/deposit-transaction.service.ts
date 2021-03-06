import {Injectable}                                 from '@angular/core';
import {Http, Response}                             from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                                 from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {DepositTransaction}                         from './deposit-transaction';

import {AppSettings}                                from '../app.config';
import  {requestOptionsProvider}                    from  '../default-request-option.service';

@Injectable()
export class DepositTransactionService {

    private urlGetDepositTransaction = AppSettings.API_ENDPOINT + 'Wallet/MyWallet'; // This is the API Endpoint for getting the list for Withdrawal Transaction per User
    constructor(private http: Http) {
    }

    /**
     * @returns {Observable<DepositTransaction[]>}
     * GET Withdrawal Transaction
     */
    getDepositTransaction(): Observable<DepositTransaction[]> {
        return this.http
            .get(this.urlGetDepositTransaction, requestOptionsProvider)
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
        let bodyData = body.Data;
        let rejectMsg: {};

        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            }
        } else {
            rejectMsg = bodyData.Deposits; // API Response if the Status is SUCCESSFUL
        }

        return rejectMsg || {};
    }

    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
     */
    private handleError(error: Response | any) {

        if(error.status == 403) {
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