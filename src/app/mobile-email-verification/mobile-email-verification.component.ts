import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';

import {MobileVerification}         from '../mobile-verification/mobile-verification';
import {MobileVerificationService}  from '../mobile-verification/mobile-verification.service';

import {EmailVerification}                  from '../email-verification/email-verification';
import {EmailVerificationService}           from '../email-verification/email-verification.service';


import {Profile}                            from '../profile/profile';
import {ProfileService}                     from '../profile/profile.service';

import {Countries} from '../country/country';
import {CountryService} from '../country/country.service';

import {Modal} from "../elements/modal/modal.module";

@Modal()

@Component({
    moduleId: module.id,
    selector: 'app-mobile-email-verification',
    templateUrl: './mobile-email-verification.component.html',
    styleUrls: ['./mobile-email-verification.component.css'],
    providers: [EmailVerificationService, MobileVerificationService]
})
export class MobileEmailVerificationComponent implements OnInit {

    profile: Profile[];
    countries: Countries[];
    dataError: any = [];
    submittedEmail:boolean;
    submittedMobile:boolean;
    submitted:boolean = true;
    resendCode: boolean;
    hasSend: boolean = false;
    valid: boolean = false;
    error: any;
    success: any;
    loadingSPinnerEmail: boolean = false;
    loadingSpinnerMobile: boolean = false;
    loadingSpinnerSubmit:boolean = false;
    mobile:boolean;
    email:boolean;
    accountAtivated: any;
    emailVerified:boolean;
    mobileVerified:boolean;

    constructor(private mobileVerificationService: MobileVerificationService,
                private profileService: ProfileService,
                private countriesService: CountryService,
                private emailVerificationService: EmailVerificationService,
                private router: Router) {
    }

    /**
     * Verify mobile number
     * @param mobile
     */

    verifyMobile(mobile: MobileVerification) {
        this.loadingSpinnerMobile = true;
        this.mobileVerificationService.verifyMobile(mobile)
            .subscribe(
            success => {
                this.loadingSpinnerMobile = false;
                let data = <any>success;
                this.success = <any>success;
                this.verificationSuccessfulMobile(data);
            },
            error => {
                this.loadingSpinnerMobile = false;
                this.verificationErrorMobile(error);
            }
        )
    }

    /**
     * Email verification
     * @param email
     */
    verifyEmail(email:EmailVerification) {
        this.loadingSPinnerEmail = true;
        email.UserName = localStorage.getItem('Username');
        this.emailVerificationService.verifyEmail(email)
            .subscribe(
                success => {
                    this.loadingSPinnerEmail = false;
                    let data = <any>success;
                    this.success = <any>success;
                    this.verificationSuccessfulEmail(data);
                },
                error => {
                    this.loadingSPinnerEmail = false;
                    this.error = <any>error;
                    this.verificationErrorEmail(error);
                },
            )
    }

    /**
     * WHen successful in getting code this will validate if the code is valid.
      * @param mobile
     */
    resetMobile(mobile: MobileVerification) {
        this.loadingSpinnerSubmit = true;
        this.mobileVerificationService.resetMobile(mobile).
            subscribe(
                success => {
                    let data = <any>success;
                    this.resetSuccessfulResp(data);
                    this.loadingSpinnerSubmit = false;
                },
                error => {
                    this.resetErrorHandler(error);
                    this.loadingSpinnerSubmit = false;
                }
        )
    }

   resetEmail(email:EmailVerification) {
       this.loadingSpinnerSubmit = true;
        this.emailVerificationService.resetEmail(email)
            .subscribe(
                success => {
                    let data = <any>success;
                    this.resetSuccessfulResp(data);
                    this.loadingSpinnerSubmit = false;
                },

                error => {
                    this.resetErrorHandler(error);
                    this.loadingSpinnerSubmit = false;
                },
            )
    }

    /**
     * Get Profile details
     */
    getProfile() {
        this.profileService.getProfile()
            .subscribe(
                profile => {
                    this.profile = profile;
                    let data = <any>profile;
                    this.accountAtivated = data.IsAccountActivated;
                    this.emailVerified = data.IsEmailVerified;
                    this.mobileVerified = data.IsMobileVerified;
                },
                error => this.error = <any>error);
    }

    /**
     * Get countries
     */
    getCountries() {
        this.countriesService.getCountries()
            .subscribe(
                countries => this.countries = countries,
                error => this.error = <any>error);
    }

    /**
     * Body Response if successful in mobile
     * @param data
     */
    verificationSuccessfulMobile(data) {
        if (data.Status == 'SUCCESS') {
            this.valid = true;
            this.mobile = true;
        } else {
            this.dataError = data.Messages;
            this.valid = false;
            this.mobile = false;
        }
    }

    /**
     * Verifiation error handler for mobile
     * @param data
     */
    verificationErrorMobile(data) {
        this.submittedMobile = true;
        this.error = data;
    }


    /**
     * Body response in email
     * @param data
     */
    verificationSuccessfulEmail(data) {

        if (data.Status == 'SUCCESS') {
            this.valid = true;
            this.email = true;
        } else {
            this.dataError = data.Messages;
            this.valid = false;
            this.email = false;
        }
    }

    /**
     * Verififcation Email error handler
     * @param data
     */

    verificationErrorEmail(data) {
        this.submittedEmail = true;
        this.error = data;
    }

    resetSuccessfulResp(data) {
        let status = data.Status;
        if (status == 'SUCCESS') {
            this.valid = true;
            this.submitAndReload();
        } else {
            this.submitted = false;
            this.valid = false;
            this.dataError = data.Messages;
        }
    }

    /**
     *
     * @param data
     */
    resetErrorHandler(data) {
        this.submitted = false;
        this.error = data;

    }

    /**
     *
     * @param profile
     */
    verifyCode(profile) {
        if(this.email == true) {
            this.resetEmail(profile);
        } else {
            this.resetMobile(profile);
        }
    }

    /**
     * Modal
     */
    modalId: string = 'modalEmailMobileVerification';
    ok: Function;
    destroy: Function;
    closeModal: Function;

    onCancel(): void {
        this.closeModal();
        this.destroy();
    }

    submitAndReload() {
        location.reload();
        this.closeModal();
        this.destroy();
    }


    ngOnInit() {
        this.getProfile();
        this.getCountries();
    }

}
