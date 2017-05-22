import { Component, OnInit }                      from '@angular/core';
import { Location }                               from '@angular/common';
import { Router }                                 from '@angular/router';

import 'rxjs/add/operator/toPromise';

import {BankAdd}                                  from './bank-add';
import {BankAddService}                           from './bank-add.service';

import { ProfileService }                         from '../profile/profile.service';

import {QuickDepositPreferredBank}                from '../quick-deposit-preferred-bank/quick-deposit-preferred-bank';
import {QuickDepositPreferredBankService}         from '../quick-deposit-preferred-bank/quick-deposit-preferred-bank.service';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  moduleId: module.id,
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.css'],
  providers: [
    BankAddService,
    QuickDepositPreferredBankService
  ]
})
export class BankAddComponent implements OnInit {

  bankAdd = new BankAdd();
  quickDepositPreferredBanks: QuickDepositPreferredBank[];
  error: string;
  success: string;
  dataError: any = [];
  valid: boolean;

  submitted: boolean = false;

  // submit button default state
  submitting: boolean = false;
  profile: any;
  accountAtivated: any;

  constructor( private bankAddService: BankAddService,
               private quickDepositPreferredBankService: QuickDepositPreferredBankService,
               private location: Location,
               private mScrollbarService: MalihuScrollbarService,
               private router:Router,
               private profileService: ProfileService
             ) {}


    getProfile() {
        this.profileService.getProfile()
            .subscribe(
                profile => {
                let data = <any>profile;
                this.bankAdd.BankAccountName = data.FullName;
                this.profile = <any>profile;
                this.accountAtivated = data.IsAccountActivated;
                if(this.accountAtivated == false) {
                    this.router.navigate(['/profile']);
                }

            },
                error => this.error = <any>error);
    }
  /**
   * Get Quick Deposit Banks
   */
  getQuickDepositPreferredBank(){
    this.quickDepositPreferredBankService.getQuickDepositPreferredBank()
        .subscribe(
            quickDepositPreferredBanks => this.quickDepositPreferredBanks = quickDepositPreferredBanks,
            error => this.error = <any>error);
  }

   /**
   * @param bankDetail
   * Create Bank Information
   */
   create(bankAdd: BankAdd) {

    this.submitted = true;
    this.submitting = true;

    this.bankAddService.create(bankAdd)
        .subscribe(
            success => {
                this.success = <any>success;
                let data = <any>success;
                let bodyData = data.bodyStatus;
                this.dataError = data.Error;
                this.submitting = false;
                if (bodyData == 'SUCCESS') {
                    this.router.navigate(['/withdrawal']);
                    this.valid = true;
                } else {
                    this.valid = false;
                }
            },
            error => {
              this.error = <any>error;
              this.submitting = false;
            }
          );
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.bankAdd);
  }


  // Go back to previous location
  goBack() {
    this.location.back(); 
  }

  ngAfterViewChecked() {
    this.mScrollbarService.initScrollbar('#scrollable', {
        axis: 'y',
        theme: 'dark-thick'
    });
  }

  ngOnInit() {
    this.getProfile();
    this.getQuickDepositPreferredBank();

  }

}