import {Injectable}                                     from '@angular/core';
import {Http, Response}                                 from '@angular/http';
import {TranslateService}                               from '@ngx-translate/core';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import {Observable}                                     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {requestOptionsProvider}                         from  '../default-request-option.service';
import {AppSettings}                                    from 'app/app.config';
import {AuthService}                                    from '../auth/auth.service';

import {Games}                                          from './games';



@Injectable()
export class GamesService {

    private GAMES_URL = AppSettings.GAME_API_ENDPOINT + 'games/'; // This is the API Endpoint for getting the game list.
    private URL = AppSettings.API_ENDPOINT + 'GameManager/GetGameUrl?';

    constructor(private http: Http,
                private translate: TranslateService,
                private authService: AuthService) {

    }


    // getGamesAll(): Observable<Games> {
    //     let lang = this.translate.currentLang;
    //     const url = `${this.GAMES_URL}${lang}`;
    //     return this.http
    //         .get(url, this.authService.contentBasicAuth())
    //         .map(this.extractData)
    //         .catch(this.handleError)
        
    // }

    getGamesByCategory(category: string): Observable<Games> {
        let lang = this.translate.currentLang;
        const url = `${this.GAMES_URL}${lang}/${category}`;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError)
    }

    getGamesByPlatform(platform: string, category: string) {
        let lang = this.translate.currentLang;
        const url = `${this.GAMES_URL}${lang}/${platform}/${category}`;
        return this.http
            .get(url, this.authService.contentBasicAuth())
            .map(this.extractData)
            .catch(this.handleError)
    }

    getGamesUrl(platform: string, category: string) {
        let lang = this.translate.currentLang;
        const url = `${this.URL}${'GamePlatform='+platform}${'&GameType='+category}${'&Language='+ lang}${'&isMobile='+0}`;
        return this.http
            .get(url, requestOptionsProvider)
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

        // if (bodyData == null) {
        //     rejectMsg = {
        //         bodyStatus: body.Status,
        //         Error: body.Messages.Errors,
        //     }
        // } else {
        //     rejectMsg = bodyData; // API Response if the Status is SUCCESSFUL
        // }

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