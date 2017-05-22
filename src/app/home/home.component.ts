import { Component, OnInit } from '@angular/core';
import { SignalR, SignalRConnection } from 'ng2-signalr';

import {CasinoService}              from '../casino/casino.service';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    errorMessages: string;
    success: string;
    casinos:any;
    error:any;

    constructor( 
        private _signalR: SignalR,
        private casinoService: CasinoService,
        private mScrollbarService: MalihuScrollbarService
     )  {
        //console.log($('body'));
       // this.someFunction();
    }

    getCasinos(): void {
        this.casinoService.getCasinos()
            .subscribe(
                success => this.casinos = <any>success,
                error => this.error = error
            );
    }

    playGames(platform: string, category: string) {
        this.casinoService.getGamesUrl(platform, category)
        .subscribe(
            success => {
                this.success = <any>success;
                let body = <any>success;
                let url = body.Data.Url;
                let frame = '<iframe style="border:0px;width:100%;height:100%;" src="' + url +'"></iframe>';
                if(body.Status == 'SUCCESS') {
                    // this.gameUrl = url;
                    $('.fullscreen-container').show().html(frame);
                } else {
                    $('.fullscreen-container').show().html('Sorry. Something went wrong while loading Casino');
                }
            },
            error => {
                this.errorMessages = error;
                $('.fullscreen-container').show().html('Sorry. Error loading Casino.');
            }
        );
  }

    loadiframe(platformCode, gameCode) {
        $('.fullscreen-window').addClass('is-open');
        this.playGames(platformCode, gameCode);
    }

    ngAfterViewChecked() {
        // console.log('afterInit casino');
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick',
            setHeight: true,
            advanced: {
                updateOnContentResize: true,
                updateOnImageLoad: true
            }
        });
    }

    ngOnInit() {
        this.getCasinos();
    }

}
