import {Injectable}                               from '@angular/core';
import {Http, Response}                           from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {BankDetail}                               from './bank-detail';

import {AppSettings}                              from '../app.config';
import {requestOptionsProvider}                   from  '../default-request-option.service';

@Injectable()
export class BankDetailService {

    private urlGetBank = AppSettings.API_ENDPOINT + 'PlayerAccount/GetBankAccount'; //with parameter ID    // This is the API Endpoint for Get Banks Info
    private urlPostBank = AppSettings.API_ENDPOINT + 'PlayerAccount/UpdateBankAccount'; // This is the API Endpoint for Update Banks
    constructor(private http: Http) {
    }

    /**
     *
     * @param id
     * @returns {Observable<BankDetail[]>}
     */
    modifyBank(id: string): Observable<BankDetail[]> {
        return this.http
            .get(this.urlGetBank +`?id=${id}`, requestOptionsProvider)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     * @param bankDetail
     * @returns {Observable<BankDetail>}
     * POST update bankDetail
     */
    bankUpdate(bankDetail: BankDetail): Observable<BankDetail> {

        return this.http
            .post(this.urlPostBank, bankDetail, requestOptionsProvider)
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

        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            }
        } else {
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        }

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