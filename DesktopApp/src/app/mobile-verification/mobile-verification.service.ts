import { Injectable }       from '@angular/core';
import {Http, Response}     from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {MobileVerification}                         from './mobile-verification';

import {AppSettings}                              from '../app.config';
import {requestOptionsProvider}                   from '../default-request-option.service';


@Injectable()
export class MobileVerificationService {

    private sendMobileCode = AppSettings.API_ENDPOINT + 'PlayerAccount/SendMobileResetCode';
    private resetMobileCode = AppSettings.API_ENDPOINT + 'PlayerAccount/ResetMobileByCode';

    constructor(private http: Http) { }

    verifyMobile(user: MobileVerification): Observable<MobileVerification> {
        return this.http
            .post(this.sendMobileCode, user, requestOptionsProvider)
            .map(this.extractData)
            .catch(this.handleError)

    }

    resetMobile(user: MobileVerification): Observable<MobileVerification> {
        return this.http
            .post(this.resetMobileCode, user, requestOptionsProvider)
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
        let bodyData = body.Data;
        let rejectMsg: {};
        rejectMsg = {
            bodyStatus: body.Status,
            Error: body.Messages.Errors,
        };

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
        //console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
