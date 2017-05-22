import {Injectable} from '@angular/core';
import {BaseRequestOptions, RequestOptions} from '@angular/http';

@Injectable()
export class DefaultRequestGameOptions extends BaseRequestOptions {

    constructor() {
        super();
        let username: string ='webmaster';
        let password: string ='changepass123';

        // Set the default 'Content-Type' header
        //this.headers.set('Content-Type', 'application/json');
        this.headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));
        //this.headers.set('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
        //this.headers.set('Access-Control-Allow-Origin', '*');
        // this.headers.set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        // this.headers.set('Access-Control-Allow-Origin', '*');
         //this.headers.set('Access-Control-Allow-Headers', 'Authorization');
        // this.headers.set('Access-Control-Allow-Headers', 'X-Requested-With,content-type,**Authorization**');
    }
}

export const requestGameOptionProvider = {provide: RequestOptions, useClass: DefaultRequestGameOptions};
