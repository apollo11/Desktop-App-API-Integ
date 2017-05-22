import {Injectable}                               from '@angular/core';
import {Http, Response}                           from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {BankAdd}                                  from './bank-add';

import {AppSettings}                              from '../app.config';
import {requestOptionsProvider}                   from '../default-request-option.service';

@Injectable()
export class BankAddService {

    private url = AppSettings.API_ENDPOINT + 'PlayerAccount/CreateBankAccount';
    constructor(private http: Http) {
    }

     /**
     *
     * @param bankAdd
     * @returns {Observable<BankAdd>}
     */
    create(bankAdd: BankAdd): Observable<BankAdd> {

         bankAdd.AccountName = localStorage.getItem('Username');

        return this.http
            .post(this.url, bankAdd, requestOptionsProvider)
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