import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import { Promotion } from './promotion';
import { PromotionService } from './promotion.service';

import { PromotionDetail } from '../promotion-detail/promotion-detail';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
    moduleId: module.id,
    selector: 'app-promotion',
    templateUrl: './promotion.component.html',
    styleUrls: ['./promotion.component.css'],
    providers: [PromotionService]
})
export class PromotionComponent implements OnInit {

    promotions: Promotion;
    gameFilter: any = { title: '', game_platform: '' };
    errorMessages: string;
    success: string;
    parameter: any;
    filter: Promotion = new Promotion();

    constructor(
        private promotionService: PromotionService,
        private route: ActivatedRoute,
        private translate: TranslateService,
        private mScrollbarService: MalihuScrollbarService
        // private params: Params
    ) {
        //console.log(route);
    }


    // getPromotion(): void {
    //       this.promotionService.getPromotion()
    //       .subscribe(
    //           success => this.promo = success,
    //           error => this.errorMessages = error
    //       );
    // }

    getPromotionAll(): void {
        this.promotionService.getPromotionAll()
            .subscribe(
            success => this.promotions = success,
            error => this.errorMessages = error
            );
    }

    ngOnInit() {
        // this.getPromotion();
        this.getPromotionAll();
        this.route.params.subscribe(params => {
            this.parameter = params;
        });
    }

    ngAfterViewChecked() {
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

    ngOnDestroy() {
        this.mScrollbarService.destroy('#scrollable');
    }

}
