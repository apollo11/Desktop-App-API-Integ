import { Injectable }       from '@angular/core';
import {Http, Response}     from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {EmailVerification}                         from './email-verification';

import {AppSettings}                              from '../app.config';
import {requestOptionsProvider}                   from '../default-request-option.service';


@Injectable()
export class EmailVerificationService {

    private ResetEmailCode = AppSettings.API_ENDPOINT + 'PlayerAccount/ResetEmailByCode';

    private senEmailResetCode = AppSettings.API_ENDPOINT + 'PlayerAccount/SendEmailResetCode';

  constructor(private http: Http) { }

    verifyEmail(user: EmailVerification): Observable<EmailVerification> {
        return this.http
            .post(this.senEmailResetCode, user, requestOptionsProvider)
            .map(this.extractData)
            .catch(this.handleError)

    }

    resetEmail(user: EmailVerification): Observable<EmailVerification> {
        return this.http
            .post(this.ResetEmailCode, user, requestOptionsProvider)
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
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
