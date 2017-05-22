import { Component, OnInit, AfterViewChecked }                    from '@angular/core';
import { ActivatedRoute, Params }               from '@angular/router';
import { Location }                             from '@angular/common';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import {Casino}                                 from './casino';
import {CasinoService}                          from './casino.service';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';


@Component({
  moduleId: module.id,
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.css'],
  providers: [CasinoService, MalihuScrollbarService]
})
export class CasinoComponent implements OnInit {

  casinos: Casino;
  error: string;
  success: string;

  constructor(
    private casinoService: CasinoService,
    private mScrollbarService: MalihuScrollbarService) { }

  getCasinos(): void {
     this.casinoService.getCasinos()
        .subscribe(
            success => this.casinos = success,
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
                this.error = error;
                $('.fullscreen-container').show().html('Sorry. Error loading Casino.');
            }
        );
  }

  loadiframe(platformCode, gameCode) {
      $('.fullscreen-window').addClass('is-open');
      this.playGames(platformCode, gameCode);
  }

  ngOnInit() {
    this.getCasinos();
  }

  ngAfterViewChecked() {
    // console.log('afterInit casino');
    this.mScrollbarService.initScrollbar('#scrollable', { 
      axis: 'y', 
      theme: 'dark-thick' 
    });
  }
  
  ngOnDestroy() {
    this.mScrollbarService.destroy('#scrollable');
  }

}