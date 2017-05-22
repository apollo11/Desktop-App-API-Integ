import {Injectable}                             from '@angular/core';
import {Http, Response}                         from '@angular/http';
import { AuthService }                          from '../../auth/auth.service';


import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                             from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Header}                                 from './header';

import {AppSettings}                            from '../../app.config';
import  {requestOptionsProvider}                from  '../../default-request-option.service';

@Injectable()
export class HeaderService {

    private URL = AppSettings.API_ENDPOINT + 'Wallet/Balance'; // This is the API Endpoint for POST Deposit

    constructor(private http: Http,
                private authService: AuthService) {
    }

    /**
     * @param onlineDeposit
     * @returns {Observable<OnlineDeposit>}
     * POST Deposit Bank
     */
    getBalance(): Observable<Header> {
        return this.http
            .get(this.URL, requestOptionsProvider)
            .map(this.extractData)
            .catch(this.handleError)
    }

    /**
     * @param onlineDeposit
     * @returns {Observable<OnlineDeposit>}
     * POST Deposit Bank
     */
    // getIP(): Observable<Header> {
    //     return this.http
    //         .get('//api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
    //         .map(this.extractData)
    //         .catch(this.handleError)
    // }

    /**
     * @param res
     * @returns {string|{}}
     * Extract Body Response
     */
    private extractData(res: Response) {
        let body = res.json();
        let rejectMsg: {};
        rejectMsg = {
            bodyStatus: body.Status,
            Error: body.Messages.Errors,
            url: body.Data.Url
        };

        return body || {};
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
