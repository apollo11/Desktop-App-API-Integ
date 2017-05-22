import {Injectable}                              from '@angular/core';
import {Http, Response}                          from '@angular/http';
import {Router}                                 from '@angular/router';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import {Observable}                              from 'rxjs/Observable';

import {Login}                                   from './login';

import {AppSettings}                            from '../app.config';
import {requestOptionsProvider}                 from '../default-request-option.service';
import { AuthService }                          from '../auth/auth.service';


@Injectable()
export class LoginService {

    private URL = AppSettings.API_ENDPOINT + 'User/Login'; // This is the API Endpoint for registering user

    constructor( private http: Http, 
                 private authService:AuthService, 
                 private router: Router ) {
    }

    /**
     * @param login
     * @returns {Observable<Login>}
     * POST user login
     */
    login(login: Login): Observable<Login> {

        return this.http
            .post(this.URL, login, requestOptionsProvider)
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

        if (bodyData == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            }
        } else {

            localStorage.setItem('TokenId', bodyData.TokenId);
            localStorage.setItem('Username', bodyData.UserName);
            localStorage.setItem('Roles', bodyData.Roles);
            localStorage.setItem('SignalRTokenId', bodyData.SignalRTokenId);
            localStorage.setItem('Expiration', bodyData.Expirration);
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        }

        return rejectMsg || {};
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
