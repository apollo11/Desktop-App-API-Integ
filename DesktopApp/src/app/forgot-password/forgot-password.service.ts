import {Injectable}                               from '@angular/core';
import {Http, Response}                           from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {ForgotPassword}                           from './forgot-password';

import {AppSettings}                              from '../app.config';
import {requestOptionsProvider}                   from '../default-request-option.service';

@Injectable()
export class ForgotPasswordService {

    private url = AppSettings.API_ENDPOINT + 'PlayerAccount/SendResetPasswordCode'; // This is the API Endpoint to sending the reset password code
    private urlValidateUsername = AppSettings.API_ENDPOINT + 'Player/IsUserExists'; // This is the API Endpoint for registering user

    constructor(private http: Http) {
    }

    /**
     *
     * @param username
     * @returns {Observable<ForgotPassword>}
     */
    validateUsername(username: string): Observable<ForgotPassword[]> {
        return this.http
            .get(this.urlValidateUsername +`?username=${username}`, requestOptionsProvider)
            .map(this.extractDataUsername)
            .catch(this.handleError);
    }

    /**
     *
     * @param reset
     * @returns {Observable<ForgotPassword>}
     * requesting for resetting the password
     */
    sendResetCode(reset: ForgotPassword): Observable<ForgotPassword> {

        return this.http
            .post(this.url, reset, requestOptionsProvider)
            .map(this.extractData)
            .catch(this.handleError)
    }

    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    private extractDataUsername(res: Response) {

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

            //trace if username is exist
            localStorage.setItem('UsernameExist',bodyData);
        }
        return rejectMsg || {};
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

        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            }
        } else {
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL

        }
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
