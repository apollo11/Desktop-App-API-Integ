import {Injectable} from '@angular/core';
import {BaseRequestOptions, RequestOptions} from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

    constructor() {
        super();

        // Set the default 'Content-Type' header
        this.headers.set('Content-Type', 'application/json');
        this.headers.set('X-PANDORA-API-Key', localStorage.getItem('TokenId'));
        this.headers.set('X-PANDORA-FP', localStorage.getItem('Fingerprint'));
        this.headers.set('X-PANDORA-IP', localStorage.getItem('IPAddress'));
    }
}

export const requestOptionsProvider = {provide: RequestOptions, useClass: DefaultRequestOptions};
