import {Component, OnInit}                      from '@angular/core';
import {ActivatedRoute, Params}                 from '@angular/router';
import {Location}                               from '@angular/common';
import {TranslateService}                       from '@ngx-translate/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import { Games } from './games';
import { GamesService } from './games.service';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
    moduleId: module.id,
    selector: 'app-games',
    templateUrl: 'games.component.html',
    styleUrls: ['games.component.css'],
    providers: [GamesService, MalihuScrollbarService]
})
export class GamesComponent implements OnInit {

    games: Games;
    gameFilter: any = {title: '', game_platform:''};
    errorMessages: string;
    success: string;
    gamesPlatform: string;
    parameter: any;
    gameUrl: any;
    isActive:boolean = true;

    filter: Games = new Games();

    constructor(
        private gameService: GamesService,
        private route: ActivatedRoute,
        private location: Location,
        private mScrollbarService: MalihuScrollbarService
    ) { }

    // getGamesAll(): void {
    //     this.gameService.getGamesAll()
    //         .subscribe(
    //         success => this.games = success,
    //         error => this.errorMessages = error
    //         );
    // }

    getGamesByCategory(): void {
        this.route.params
            .switchMap((params: Params) => this.gameService.getGamesByCategory(params['category']))
            .subscribe(
                success => this.games = success,
                error => this.errorMessages = error
            );
    }

    getActivePlatform(platform: string) {
        this.isActive = false;
        this.filter.game_platform = platform;
        // if(!this.filter.game_platform || filter.title ) {
        //     this.filter = '';
        // }
    }

    getGamesByPlatform(): void {
        this.route.params
            .switchMap((params: Params) => this.gameService.getGamesByPlatform(params['platform'], params['category']))
            .subscribe(
                success => this.gamesPlatform = success,
                error => this.errorMessages = error
            );
    }

    playGames(platform: string, category: string) {
        this.gameService.getGamesUrl(platform, category)
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
                        $('.fullscreen-container').show().html('Sorry. Error loading game');
                    }
                },
                error => {
                    this.errorMessages = error;
                    $('.fullscreen-container').show().html('Ooops! Sorry. Error loading game');
                }
            );      
    }

    ngOnInit() {
        this.getGamesByCategory();
        this.getGamesByPlatform();

        this.route.params.subscribe(params => {
            this.parameter = params;
        });
    }

    ngAfterViewChecked() {
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    }

    ngOnDestroy() {
        this.mScrollbarService.destroy('#scrollable');
    }

    nextPage() {
        console.log('Reached Bottom!!');
    }

    loadiframe(platformCode, gameCode) {
        $('.fullscreen-window').addClass('is-open');
        this.playGames(platformCode, gameCode);
    }

}
