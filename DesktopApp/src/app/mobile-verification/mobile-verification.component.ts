import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import {MobileVerification}         from './mobile-verification';
import {MobileVerificationService}  from './mobile-verification.service';

import { Profile } from '../profile/profile';
import { ProfileService } from '../profile/profile.service';

import { Countries } from '../country/country';
import { CountryService } from '../country/country.service';

import { Modal } from "../elements/modal/modal.module";

@Modal()

@Component({
  selector: 'app-mobile-verification',
  templateUrl: './mobile-verification.component.html',
  styleUrls: ['./mobile-verification.component.css'],
  providers:[ MobileVerificationService ]
})
export class MobileVerificationComponent implements OnInit {

    profile: Profile[];
    countries: Countries[];
    error: string;
    success: string;
    valid: boolean = false;
    submitted: boolean = false;
    dataError: any = [];
    reset: boolean;
    hasSend: boolean = false;
    submitting:boolean = false;
    submittingResend: boolean = false;

  constructor(
      private mobileVerificationService:MobileVerificationService,
      private profileService:ProfileService,
      private countriesService: CountryService,
      private router: Router,
  ) {
  }

    verifyMobile(mobile:MobileVerification) {
        this.submitted = true;
        this.submitting = true;
        mobile.UserName = localStorage.getItem('Username');

        this.mobileVerificationService.verifyMobile(mobile)
            .subscribe(
                success =>  {
                    let data = <any>success;
                    let status = data.Status;
                    this.success = <any>success;
                    this.submitting = false;
                    if (status == 'SUCCESS') {
                        this.valid = true;
                        this.hasSend = true;
                    } else {
                        this.valid = false;
                        this.dataError = data.Messages;
                    }
                },

                error => {
                    this.submitted = false;
                    this.submitting = false;
                    this.error = <any>error
                },
            )
    }

    resetMobile(email:MobileVerification) {
        this.submittingResend = true;
        this.mobileVerificationService.resetMobile(email)
            .subscribe(
                success => {
                    let data = <any>success;
                    let status = data.Status;
                    this.success = <any>success;
                     this.submittingResend = false;
                    if (status == 'SUCCESS') {
                        this.valid = true;
                        this.submitAndReload();
                    } else {
                        this.valid = false;
                        this.dataError = data.Messages;
                    }
                },
                error => {
                    this.submitted = false;
                    this.submittingResend = false;
                    this.error = <any>error
                },
            )
    }


    getProfile() {
        this.profileService.getProfile()
            .subscribe(
                profile => this.profile = <any>profile,
                error => this.error = <any>error);
    }

    /**
     * Get Countries
     */
    getCountries() {
        this.countriesService.getCountries()
            .subscribe(
                countries => this.countries = countries,
                error => this.error = <any>error);
    }

    goToProfile() {
        console.log('start');
        this.router.navigate(['/profile']);
    }

    // MODAL
    modalId: string = 'modalVerifyMobile';
    ok: Function;
    destroy: Function;
    closeModal: Function;

    onCancel(): void {
        this.closeModal();
        this.destroy();
    }

    submitAndReload() {
        this.closeModal();
        this.destroy();
        location.reload();
    }

    ngOnInit() {
      this.getProfile();
      this.getCountries();
  }

}
