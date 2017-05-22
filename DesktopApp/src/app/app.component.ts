import {Component, OnInit, NgZone}          from '@angular/core';
import { TranslateService }                 from '@ngx-translate/core';

import {AuthService}                        from './auth/auth.service';
import { HeaderService }                    from './layout/header/header.service';
import { Router }                           from '@angular/router';

import {Idle, DEFAULT_INTERRUPTSOURCES}     from '@ng-idle/core';
import {Keepalive}                          from '@ng-idle/keepalive'

declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {  

    logged: boolean = false;

    idleState;
    idleNow = false;
    timedOut = false;
    lastPing?: Date = null;
    success: any;
    error:any;
    langCode = !localStorage.getItem('lang') ? 'en' : localStorage.getItem('lang');

    userDetails = {
        username: localStorage.getItem('Username')
    };

    constructor( 
        private router: Router,
        private authService: AuthService,
        private idle: Idle, 
        private keepalive: Keepalive,
        private headerService:HeaderService,
       private translate: TranslateService,

    ) {  
        if (localStorage.getItem('TokenId')) {
            this.logged = true;
            // sets an idle timeout of 5 seconds, for testing purposes.
            idle.setIdle(900);
            // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
            idle.setTimeout(15);
            // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
            idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

            idle.onIdleStart.subscribe(() => {
                this.idleState = 'You\'ve gone idle!';
                this.idleNow = true;
            });
            idle.onIdleEnd.subscribe(() => {
                // this.idleState = 'No longer idle.';
                this.idleNow = false;
            });
            idle.onTimeout.subscribe(() => {
                this.idleState = 'Timed out!';
                this.timedOut = true;
                this.logout();
            });
            idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will be logged out in ' + countdown + ' seconds!');

            // sets the ping interval to 15 seconds
            keepalive.interval(15);
            keepalive.onPing.subscribe(() => this.lastPing = new Date());
            this.reset();
        }

        /**
         *
         * Tanslations detection
         */
        let browserLang = this.langCode;
        translate.use(browserLang.match(/en|zh-hans/) ? browserLang : 'zh-hans');
    }

    logout() {
        this.authService.logout();
        this.logged = false;
        location.replace('/login');        
    }

    reset() {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    }

    reload() {
        location.reload();
    }

    openFullScreenWindow() {
        var fullwindow = $('.fullscreen-window');
        fullwindow.addClass('is-open');
    }

    closeFullscreenWindow() {
        var resizeTimer,
            fullwindow = $('.fullscreen-window');
        
        fullwindow.removeClass('is-open').addClass('is-closed');
        $('.fullscreen-container').hide().html('');

        clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			 fullwindow.removeClass('is-closed');
		}, 250);
    }

    addOnlineDeposit() {
        this.router.navigateByUrl('/online-deposit');            
        this.closeFullscreenWindow();
    }

    addWechatDeposit() {        
        this.router.navigateByUrl('/wechat');
        this.closeFullscreenWindow();
    }

    ngOnInit() {
       // this.getIpAddr();
        if (this.logged) {
            $('#page').addClass('is-main');
        } else {
            $('#page').removeClass('is-main');
        }
    }

}

