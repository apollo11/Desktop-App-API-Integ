import {Injectable}                                     from '@angular/core';
import {Http, Response}                                 from '@angular/http';
import {TranslateService}                               from '@ngx-translate/core';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                                     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Promotion}                                      from './promotion';

import {AppSettings}                                    from 'app/app.config';
import {AuthService}                                    from '../auth/auth.service';

@Injectable()
export class PromotionService {

    private GAMES_URL = AppSettings.GAME_API_ENDPOINT + 'promotion/'; // This is the API Endpoint for getting the game list.

    constructor(private http: Http,
                private translate: TranslateService,
                private authService: AuthService) {

    }

    getPromotion(): Observable<Promotion> {
        let lang = this.translate.currentLang;
        const url = `${this.GAMES_URL}${lang}`;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError)
    }

    getPromotionAll(): Observable<Promotion> {
        let lang = this.translate.currentLang;
        const url = `${this.GAMES_URL}${lang}`;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError)
    }

    /**
     * @param res
     * @returns {Response}
     * Extract Body Response
     */
    private extractData(res: Response) {

        let body = res.json();
        let data = body.Data;
        let rejectMsg: string;

        if (String(body.Data) == 'null') {
            rejectMsg = 'Status: ' + body.Status + ' Messages: ' + JSON.stringify(body.Messages.Errors); // API Response if the Status is FAILED
        } else {
            rejectMsg = JSON.stringify(body.Data); // API Response if the Status is SUCCESSFUL
        }

        return body;
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