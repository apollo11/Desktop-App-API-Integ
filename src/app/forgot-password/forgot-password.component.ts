import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { ForgotPassword } from './forgot-password';
import { ForgotPasswordService } from './forgot-password.service';

import { Countries } from '../country/country';
import { CountryService } from '../country/country.service';

import { ForgotPasswordResetComponent } from "../forgot-password-reset/forgot-password-reset.component";

import { AppModule } from "../app.module";
import { Modal, ModalService } from "../elements/modal/modal.module";

@Component({
    moduleId: module.id,
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css'],
    providers: [
        ForgotPasswordService,
        CountryService
    ]
})

@Modal()

export class ForgotPasswordComponent implements OnInit {

    forgotPassword = new ForgotPassword();
    countries: Countries[];
    error: string;
    success: string;
    dataError: any = [];
    valid: boolean;
    submitted: boolean = false;

    // submit button default state
    submitting: boolean = false;

    constructor(private forgotPasswordService: ForgotPasswordService,
        private modalService: ModalService,
        private countriesService: CountryService,
        private route: ActivatedRoute) {
    }

    /**
     *
     * @param reset
     * requesting code to reset the password
     */
    sendResetCode(reset: ForgotPassword) {
        this.submitting = true;

        //save in local storage for faster retrieval of information for resent code
        localStorage.setItem('PasswordResetUserName', reset.UserName);
        localStorage.setItem('PasswordResetEmail', reset.Email);
        localStorage.setItem('PasswordResetMobileCountryCode', reset.MobileCountryCode);
        localStorage.setItem('PasswordResetMobileNo', reset.MobileNo);

        this.forgotPasswordService.sendResetCode(reset)
            .subscribe(
            success => {
                this.submitting = false;
                this.success = <any>success;
                let data = <any>success;
                //this.dataError = data.Messages;
                // console.log(data);
                let status = data.Status;
                if (status == 'SUCCESS') {
                    this.valid = true;
                    this.onOk();
                } else {
                    this.valid = false;
                    this.dataError = data.Messages;
                }
            },
            error => {
                this.error = <any>error;
                this.submitting = false;
            });
    }

    // Open Next Modal
    openModal() {
        // Close Existing Modal
        this.closeModal();
        this.destroy();

        // Call new modal
        this.modalService.create(AppModule, ForgotPasswordResetComponent, {});
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

    // validate to api
    // validateUsername(username: string): void {
    //     this.route.params
    //         .switchMap((params: Params) => this.forgotPasswordService.validateUsername(username))
    //         .subscribe(
    //         success => {
    //             if (localStorage.getItem('UsernameExist') == 'true') {
    //                 this.sendResetCode(this.forgotPassword);
    //                 this.openModal();
    //             } else {
    //             }
    //         },
    //         error => this.error = error
    //         );
    // }


    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.forgotPassword);
    }

    // MODAL
    modalId: string = 'modalForgotPassword';
    ok: Function;
    destroy: Function;
    closeModal: Function;

    onCancel(): void {
        this.closeModal();
        this.destroy();
    }

    onOk(): void {
        this.closeModal();
        this.destroy();
        this.openModal();
    }

    onSubmit(forgotPassword) {
        this.sendResetCode(forgotPassword);
        console.log('ok');
        this.submitted = true;
        // this.ok = this.sendResetCode;

        //validate:
        // connect to api to validate username if valid or not
        //this.validateUsername(this.forgotPassword.UserName);
    }

    ngOnInit() {
        this.getCountries();
        this.forgotPassword.MobileCountryCode = '+86'
    }

}