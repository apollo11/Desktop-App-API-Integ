import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions}        from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;
    tokenId: string = localStorage.getItem('TokenId');
    username: string = localStorage.getItem('TokenId');

    /**
     * Redirect when logging in successful
     */
    redirectUrl: string;

    login() {
        let token: boolean;
        if (this.tokenId) {
            this.isLoggedIn = true;
            token = true;
        }
        return token;
    }

    logout(): void {
        localStorage.removeItem('TokenId');
        this.isLoggedIn = false;
    }


}
