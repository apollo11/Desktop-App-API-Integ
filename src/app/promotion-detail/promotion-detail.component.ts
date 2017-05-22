import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Params }               from '@angular/router';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';

import {PromotionDetail}                                  from './promotion-detail';
import {PromotionDetailService}                           from './promotion-detail.service';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  moduleId: module.id,
  selector: 'app-promotion-detail',
  templateUrl: './promotion-detail.component.html',
  styleUrls: ['./promotion-detail.component.css'],
  providers: [PromotionDetailService]
})
export class PromotionDetailComponent implements OnInit {

  promotionDetails: PromotionDetail;
  errorMessages: string;
  success: string;

  constructor(
      private promotionDetailService: PromotionDetailService,
      private route: ActivatedRoute,    
      private location: Location,
      private mScrollbarService: MalihuScrollbarService) { }


  getPromotionDetail(): void {
    this.route.params
        .switchMap((params: Params) => this.promotionDetailService.getPromotionDetail(params['category'], params['id']))
        .subscribe(
            success => this.promotionDetails = success,
            error => this.errorMessages = error
        );
  }

  ngOnInit() {
    this.getPromotionDetail();
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

    goBack() {
      this.location.back();
    }

}
