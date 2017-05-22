import {Component, OnInit}                        from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {Bank}                                     from './bank';

import {Profile}                                  from '../profile/profile';
import {ProfileService}                           from '../profile/profile.service';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  moduleId: module.id,
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css'],
  providers: [
      ProfileService
  ]
})

export class BankComponent implements OnInit {
  banks: Bank[];
  profiles: Profile[];
  errorMessage: string;

  constructor(
    private profileService: ProfileService,
    private mScrollbarService: MalihuScrollbarService
  ) { }


  /**
   *Get Profile Information
   */
  getProfile() {
    this.profileService.getProfile()
        .subscribe(
            profiles => this.profiles = profiles,
            error => this.errorMessage = <any>error);
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.banks);
  }

  ngAfterViewChecked() {
    this.mScrollbarService.initScrollbar('#scrollable', {
        axis: 'y',
        theme: 'dark-thick'
    });
  }

  ngOnInit() {
    this.getProfile();
  }

}