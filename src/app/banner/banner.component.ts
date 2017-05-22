import {Component, OnInit}                      from '@angular/core';
import {TranslateService}                       from '@ngx-translate/core';
import { ActivatedRoute, Params }               from '@angular/router';

import {Banner}                                 from './banner';
import{BannerService}                           from './banner.service';

import { GamesService } from '../games/games.service';

@Component({
  moduleId: module.id,
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [BannerService, GamesService]
})

export class BannerComponent implements OnInit {

    banner: Banner;
    errorMessages: string;
    success: string;
    

  constructor(
        private bannerService: BannerService,
        private gameService: GamesService,
  ) { }

    getBanner(): void {
         this.bannerService.getBanner()
                .subscribe(
                    success => this.banner = success,
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
                    $('.fullscreen-container').show().html('Oops! Sorry. Error loading game');
                }
            );      
    }

    loadiframe(platformCode, gameCode) {
        $('.fullscreen-window').addClass('is-open');
        this.playGames(platformCode, gameCode);
    }

    ngOnInit() {
        this.getBanner();
  }

}
