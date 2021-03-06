import {Injectable}                             from '@angular/core';
import {Http, Response }                  from '@angular/http';
import {TranslateService}                       from '@ngx-translate/core';


import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                              from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Registration}                            from './registration';

import {AppSettings}                               from '../app.config';
import  {requestOptionsProvider}                  from  '../default-request-option.service';

@Injectable()
export class RegistrationService {

    private url = AppSettings.API_ENDPOINT + 'v1/Player/Register'; // This is the API Endpoint for registering user

    IPAddress: string;

    constructor(
        private http: Http,
        private translate: TranslateService
    ) {
        $.getJSON("https://jsonip.com?callback=?", function(data) {            
            this.IPAddress = data.ip;
            // alert("Your IP address is :- " + this.IPAddress);
        });
    }



    /**
     * @param reg
     * @returns {Observable<R>}
     * POST registering user
     */
    create(reg: Registration): Observable<Registration> {

        let lang = this.translate.currentLang;
        reg.IPAddress = localStorage.getItem('IPAddress');
        reg.BrandCode = 'O88';
        reg.LanguageCode = lang;
        reg.ConfirmPassword = reg.Password;
        return this.http
            .post(this.url, reg, requestOptionsProvider)
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
            };
        } else {
            localStorage.setItem('TokenId', bodyData.TokenId);
            localStorage.setItem('Username', bodyData.UserName);
            localStorage.setItem('Roles', bodyData.Roles);
            localStorage.setItem('SignalRTokenId', bodyData.SignalRTokenId);
            localStorage.setItem('Expiration', bodyData.Expirration);
            rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
            console.log(rejectMsg);
        }

        return rejectMsg || {};
    }

    /**
     * @param error
     * @returns {ErrorObservable}
     * Handling error for body reponse
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
