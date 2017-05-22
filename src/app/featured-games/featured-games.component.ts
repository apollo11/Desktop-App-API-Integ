import {Component, OnInit}                      from '@angular/core';
import {ActivatedRoute, Params}                 from '@angular/router';
import {Location}                               from '@angular/common';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import {FeaturedGames}                                  from '../featured-games/featured-games';
import {FeaturedGamesService}                           from '../featured-games/featured-games.service';


@Component({
    moduleId: module.id,
    selector: 'app-featured-games',
    templateUrl: 'featured-games.component.html',
    styleUrls: ['featured-games.component.css'],
    providers: [FeaturedGamesService]
})
export class FeaturedGamesComponent implements OnInit {

    games: FeaturedGames;
    errorMessages: string;
    success: string;
    parameter: any;

    constructor(
        private gameService: FeaturedGamesService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    getGames(): void {
            this.gameService.getGames()
            .subscribe(
                success =>this.games = success,
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
                    $('.fullscreen-container').show().html('Sorry. Error loading game');
                }
            );      
    }

    loadiframe(platformCode, gameCode) {
        $('.fullscreen-window').addClass('is-open');
        this.playGames(platformCode, gameCode);
    }

    ngOnInit() {
        this.getGames();

        this.route.params.subscribe(params => {
            this.parameter = params;
        });
    }

}
