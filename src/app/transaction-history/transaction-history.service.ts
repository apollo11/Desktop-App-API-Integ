import {Injectable}                       from '@angular/core';
import {Http, Response}                     from '@angular/http';

import {Observable}                         from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {TransactionHistory}                 from './transaction-history';

import {AppSettings}                        from '../app.config';
import {requestOptionsProvider}             from '../default-request-option.service';


@Injectable()

export class TransactionHistoryService {

    private URL = AppSettings.API_ENDPOINT + 'Wallet/GetTransactionHistory';

    constructor(private http: Http) {
    }

    getTransactionHistory(history: TransactionHistory):  Observable<TransactionHistory> {

        return this.http
            .post(this.URL, history, requestOptionsProvider)
            .map(this.extractData)
            .catch(this.handleError)
    }

    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    private extractData(res: Response) {
        let body = res.json();

        return body || {};

    }

    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body Response
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
        return Observable.throw(errMsg);

    }

}
