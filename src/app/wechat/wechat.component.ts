import {Component, OnInit}                  from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {Wechat}                             from './wechat';
import {WechatService}                      from './wechat.service';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import {isNumber} from "util";

@Component({
    moduleId: module.id,
    selector: 'app-weChat',
    templateUrl: './wechat.component.html',
    styleUrls: ['./wechat.component.css'],
    providers: [WechatService]
})

export class WechatComponent implements OnInit {
    wechat = new Wechat();
    error: string;
    success: string;
    // valid: boolean = true;
    submitted: boolean = false;
    valAmount: number;


    // submit button default state
    submitting: boolean = false;

    constructor(
        private wechatService: WechatService,
        private mScrollbarService: MalihuScrollbarService
    ) {}


    resetForm() {
        this.submitted = false;
    }

    /**
     * @param weChat
     * wechat payment
     */
    weChatPayment(wechat: Wechat) {
      this.valAmount = parseInt(wechat.Amount);

        if (this.valAmount == 0 || this.valAmount < 10 || this.valAmount > 3000) {
            this.submitted = true;
            this.submitting = false;
        } else {
            this.submitted = true;
            this.submitting = true;
            this.wechatService.weChatPayment(wechat)
                .subscribe(
                    // success => this.success = <any>success,
                    success => {
                        this.success = <any>success;
                        this.submitting = false;
                        this.submitted = true;
                    },
                    error => {
                        this.error = <any>error;
                        this.submitting = false;
                        // this.submitted = false;
                    });
        }

    }

    onCancel() {
        this.success = '';
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.wechat);
    }

    ngAfterViewChecked() {
        // console.log('afterInit casino');
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    }    

    ngOnInit() {
    }

}
