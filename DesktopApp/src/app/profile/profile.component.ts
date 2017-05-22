import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Location }           from '@angular/common';

import { Profile } from './profile';
import { ProfileService } from './profile.service';

import { SecurityQuestion } from '../security-question/security-question';
import { SecurityQuestionService } from '../security-question/security-question.service';

import { Countries } from '../country/country';
import { CountryService } from '../country/country.service';

import { StateProvince } from '../state-province/state-province';
import { StateProvinceService } from '../state-province/state-province.service';

import { EmailVerificationComponent } from '../email-verification/email-verification.component';
import { MobileVerificationComponent } from '../mobile-verification/mobile-verification.component';

import {MobileEmailVerificationComponent} from '../mobile-email-verification/mobile-email-verification.component';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import { AppModule } from "../app.module";
import { ModalService } from "../elements/modal/modal.module";

@Component({
    moduleId: module.id,
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css'],
    providers: [
        ProfileService,
        SecurityQuestionService,
        CountryService,
        StateProvinceService
    ]
})

export class ProfileComponent implements OnInit {
    profile: Profile[];
    securityQuestionInfo: SecurityQuestion[];
    countries: Countries[];
    stateProvinces: StateProvince[];
    error: string;
    success: string;
    data = new Profile();
    submitted: boolean = false;
    secQuestion: string;

    // submit button default state
    submitting: boolean = false;

    accountAtivated: any;
    date: any;
    dataError: any = [];
    valid: boolean;
    dateGet:string;
    emailVerified:boolean;
    mobileVerified:boolean;
    /**
     * @param profileService
     * @param securityQuestion
     * @param countriesService
     */
    constructor(
        private profileService: ProfileService,
        private securityQuestion: SecurityQuestionService,
        private countriesService: CountryService,
        private stateProvinceService: StateProvinceService,
        private mScrollbarService: MalihuScrollbarService,
        private modalService: ModalService,
        private location: Location,
    ){ }


    private myDatePickerOptions: IMyOptions = {            
        dateFormat: 'yyyy-mm-dd',
        //"0001-01-01T00:00:00"
        showSelectorArrow: false,
        //inputAutoFill: false,
        showTodayBtn: false,
        editableDateField: false,
        showClearDateBtn: false,
        openSelectorOnInputClick: true,
        height: 'auto',
        selectionTxtFontSize: '12px'
    };

    onDateChanged(event: IMyDateModel) {
        this.date = event.formatted;
    }

    /**
     *Get Profile Information
     */
    getProfile() {
        this.profileService.getProfile()
            .subscribe(
            profile =>{
                this.profile = <any>profile;
                let data = <any>profile;
                this.accountAtivated = data.IsAccountActivated;
                this.emailVerified = data.IsEmailVerified;
                this.mobileVerified = data.IsMobileVerified;

                this.dateGet = data.BirthDate.substring(0,10);
                if(this.dateGet == '0001-01-01'){
                    var now = new Date();
                    now.setFullYear(now.getFullYear() - 18);
                    this.dateGet = now.getFullYear() + "-" + ("0"+(now.getMonth()+1)).slice(-2) + "-" +  ("0" + now.getDate()).slice(-2) ;
                }
            },
            error => this.error = <any>error);
    }

    /**
     * Get Security Question
     */
    getSecurityQuestion() {
        this.securityQuestion.getSecurityQuestion()
            .subscribe(
            securityInfo => this.securityQuestionInfo = securityInfo,
            error => this.error = <any>error)
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

    /**
     * Get StateProvince
     */
    getStateProvince() {
        this.stateProvinceService.getStateProvince()
            .subscribe(
            stateProvinces => this.stateProvinces = stateProvinces,
            error => this.error = <any>error);
    }

    onCancel() {
        this.location.back();
    }

    /**
     * @param profile
     * Update Profile Information
     */
    updateProfile(profile: Profile) {

        if(this.date == 'undefined'){
            profile.BirthDate = this.date;
        }else{
            profile.BirthDate = this.dateGet;
        }

        this.submitted = true;
        this.submitting = true;
        this.profileService.profileUpdate(profile)
            .subscribe(
                success => {
                    let data = <any>success;
                    this.success =  <any>success;
                    let bodyData = data.Status;
                    this.submitted = false;
                    this.submitting = false;
                    if (bodyData == 'SUCCESS') {
                        this.valid = true;
                        localStorage.setItem('Fullname', profile.FullName);
                        if(this.accountAtivated == false) {
                            this.openEmailModalVerification();
                        }
                    } else {
                        this.dataError = data.Messages;
                        this.valid = false;
                        this.error = <any>success;
                    }
                },
            error => {
                this.valid = false;
                this.submitting = false;
                this.error = <any>error;
            });
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.profile);
    }

    openModalVerifyMobile(): void {
        let modal$ = this.modalService.create(AppModule, MobileVerificationComponent, {});
    }

    openModalVerifyEmail(): void {
        let modal$ = this.modalService.create(AppModule, EmailVerificationComponent, {});
    }

    openEmailModalVerification(): void {
        let modal$ = this.modalService.create(AppModule, MobileEmailVerificationComponent, {});
    }

    ngAfterViewChecked() {
        this.mScrollbarService.initScrollbar('#scrollable', {
            axis: 'y',
            theme: 'dark-thick'
        });
    }

    ngOnInit() {
        this.getProfile();
        this.getSecurityQuestion();
        this.getCountries();
        this.getStateProvince();

    }

}
