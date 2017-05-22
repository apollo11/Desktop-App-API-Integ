import { Component, OnInit, NgZone, ElementRef } from '@angular/core';
import { SignalR, SignalRConnection, BroadcastEventListener } from 'ng2-signalr';

import { HeaderService } from './header.service';
import { Header } from './header';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';
import { AuthService } from '../../auth/auth.service';
import {TranslateService} from '@ngx-translate/core';

declare var $: any;

@Component({
    selector: '[app-header]',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    providers: [LoginService, HeaderService],
    host: {
        '(document:click)': 'onClick($event)',
    },
})

export class HeaderComponent implements OnInit {
    success: string;
    error: string;
    balance: any;
    currentBal: any;

    showWindowOptns: boolean = false;
    dateShow: any;

    constructor(private loginService: LoginService,
        private authService: AuthService,
        private router: Router,
        private headerService: HeaderService,
        private ngZone: NgZone,
        private _signalR: SignalR,
        private el: ElementRef,
        private translate: TranslateService
    ){
        this.signalRConnection();
    }

    logout() {
        this.authService.logout();
        location.replace('/login');

        // Redirect the user
        //let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'login';
        //this.router.navigate([redirect]);
    }

    userDetails = {
        username: localStorage.getItem('Username'),
        date: new Date(),
    };

    signalRConnection() {
        this._signalR.connect().then((c) => {

            let onMessageSent$ = c.listenFor('myBalance');
            onMessageSent$.subscribe(() => {
                this.getBalance();
            });

            let kickPlayer$ = c.listenFor('kickPlayer');
            kickPlayer$.subscribe(() => {
                alert('You have been kicked!');
                this.logout();
            });

            let notifyPlayer$ = c.listenFor('notifyPlayer');
            notifyPlayer$.subscribe(() => {
                console.log('Nofify player');
            });

        });
    }

    getBalance() {
        this.headerService.getBalance()
            .subscribe(success => {
                this.ngZone.runOutsideAngular(() => {
                    this.ngZone.run(() => {
                        this.success = <any>success;
                        let data = <any>success;
                        let balance = data.Data.Balance;
                        if (data.Status == 'SUCCESS') {
                            this.balance = balance;
                        }
                    });
                });
            },
            error => {
                this.error = <any>error;

            })
    }

    currentBalance() {
        this.headerService.getBalance()
            .subscribe(success => {
                this.ngZone.runOutsideAngular(() => {
                    this.ngZone.run(() => {
                        this.success = <any>success;
                        let data = <any>success;
                        let balance = data.Data.Balance;
                        if (data.Status == 'SUCCESS') {
                            this.currentBal = balance;
                        }
                    });
                });
            })
    }

    toggleWindowOptns() {
        if (this.showWindowOptns) {
            this.showWindowOptns = false;
        } else {
            this.showWindowOptns = true
        }
    }

    onClick(event) {
        if (!this.el.nativeElement.contains(event.target)) { // or some similar check
            this.showWindowOptns = false;
        }
        // console.log('window ' + this.showWindowOptns);
    }

    showDate(){

        let lang = this.translate.currentLang;
        var dateFormat = new Intl.DateTimeFormat([lang], {
            weekday: "long",
            year: "numeric",
            day: "numeric",
            month: "long",
            hour: 'numeric',
            minute: 'numeric',
            hour12: false
        });

        this.dateShow = dateFormat.format(new Date());
    }

    ngOnInit() {
        this.currentBalance();
        this.showDate();
    }

}
