import {Component, OnInit}                        from '@angular/core';
import {ActivatedRoute, Params}                   from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/toPromise';

import {BankDetail}                               from './bank-detail';
import {BankDetailService}                        from './bank-detail.service';

import {QuickDepositPreferredBank}                from '../quick-deposit-preferred-bank/quick-deposit-preferred-bank';
import {QuickDepositPreferredBankService}         from '../quick-deposit-preferred-bank/quick-deposit-preferred-bank.service';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  moduleId: module.id,
  selector: 'app-bank-detail',
  templateUrl: './bank-detail.component.html',
  styleUrls: ['./bank-detail.component.css'],
  providers: [
    BankDetailService,
    QuickDepositPreferredBankService
  ]
})
export class BankDetailComponent implements OnInit {
  bankDetails: BankDetail[];
  quickDepositPreferredBanks: QuickDepositPreferredBank[];
  errorMessage: string;
  successMessage: string;

  constructor(private bankDetailService: BankDetailService,
              private route: ActivatedRoute,
              private quickDepositPreferredBankService: QuickDepositPreferredBankService,
              private location: Location,
              private mScrollbarService: MalihuScrollbarService) { }


  /**
   * Get Quick Deposit Banks
   */
  getQuickDepositPreferredBank(){
    this.quickDepositPreferredBankService.getQuickDepositPreferredBank()
        .subscribe(
            quickDepositPreferredBanks => this.quickDepositPreferredBanks = quickDepositPreferredBanks,
            error => this.errorMessage = <any>error);
  }

  /**
   * Get user bank list with ID Parameter
   */

  modifyBank(): void {
    this.route.params
        .switchMap((params: Params) => this.bankDetailService.modifyBank(params['id']))
        .subscribe(
            bankDetails => this.bankDetails = bankDetails,
            error => this.errorMessage = error
        );
  }

  /**
   * @param bankDetail
   * Update Bank Information
   */
  bankUpdate(bankDetail: BankDetail) {
    this.bankDetailService.bankUpdate(bankDetail)
        .subscribe(
            success => this.successMessage = <any>success,
            error => this.errorMessage = <any>error);
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.bankDetails);
  }

  // Go back to previous location
  goBack() {
    this.location.back(); 
  }

  ngOnInit() {
    this.modifyBank();
    this.getQuickDepositPreferredBank();
  }

  ngAfterViewChecked() {
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    }


}