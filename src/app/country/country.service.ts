import {Injectable}                               from '@angular/core';
import {Http, Response}                           from '@angular/http';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Countries}                                from './country';

import {AppSettings}                              from '../app.config';
import  {requestOptionsProvider}                  from  '../default-request-option.service';

@Injectable()
export class CountryService {

    private urlGetCountries = AppSettings.API_ENDPOINT + 'PandoraCommon/GetCountries'; // This is the API Endpoint for getting the list of Countries

    constructor(private http: Http) {
    }

    /**
     * @returns {Observable<Countries[]>}
     * GET Security Question
     */
    getCountries(): Observable<Countries[]> {
        return this.http
            .get(this.urlGetCountries, requestOptionsProvider)
            .map(this.extractData)
            .catch(this.handleError);
    }

    /**
     * @param res
     * @returns {Response}
     * Extract Body Response
     */
    private extractData(res: Response) {

        let body = res.json();
        let bodyData = body.Data;
        let rejectMsg: {};

        if (body.Data == null) {
            rejectMsg = {
                bodyStatus: body.Status,
                Error: body.Messages.Errors,
            };
        } else {
            rejectMsg = bodyData;
        }

        return rejectMsg;
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