import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }               from '@angular/router';
import { Location }                             from '@angular/common';
import {TranslateService}                       from '@ngx-translate/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import {Sports}                                 from './sports';
import {SportsService}                          from './sports.service';


@Component({
  moduleId: module.id,
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
  providers: [SportsService]
})

export class SportsComponent implements OnInit {

    sports: Sports;
    error: string;
    success: string;

    constructor(
        private sportsService: SportsService,
        private route: ActivatedRoute,
        private location: Location,
        private translate: TranslateService
    ) { }

    getSportsBook(): void {
        this.sportsService.getSports()
            .subscribe(
                success => this.sports = <any>success,
                error => this.error = <any>error
        );
    }

    playGames(lang: string, platform: string, category: string) {
        this.sportsService.getSportsUrl(lang, platform, category).
            subscribe(
                success =>{
                    this.success = <any>success;
                    let body = <any>success;
                    let url = body.Data.Url;
                    let frame = '<iframe style="border:0px;width:100%;height:100%;" src="' + url +'"></iframe>';
                    if(body.Status == 'SUCCESS') {
                        // this.gameUrl = url;
                        $('.fullscreen-container').show().html(frame);
                    } else {
                        $('.fullscreen-container').show().html('Sorry. Error loading game');
                    }
                },
                error => {
                    this.error = error;
                    $('.fullscreen-container').show().html('Ooops! Sorry. Error loading game');
                }
        );
    }


    loadiframe(langCode, platformCode, gameCode) {
        $('.fullscreen-window').addClass('is-open');
        this.playGames(langCode, platformCode, gameCode);
    }

    ngOnInit() {
        this.getSportsBook();
    }

}
