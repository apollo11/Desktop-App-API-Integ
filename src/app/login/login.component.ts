import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Login } from './login';
import { LoginService } from './login.service';
import { AuthService } from '../auth/auth.service';

import { AppModule } from "../app.module";
import { ModalService } from "../elements/modal/modal.module";
import { RegistrationComponent } from "../registration/registration.component";
import { ForgotPasswordComponent } from "../forgot-password/forgot-password.component";

// import 'assets/js/index.min.js'

// declare var getFringerprint: any;

@Component({
    moduleId: module.id,
    selector: 'app-login',
    templateUrl: './login.component.html',
    // styleUrls: ['./login.component.css'],
    providers: [LoginService, AuthService]
})

export class LoginComponent implements OnInit {

    error: string;
    login = new Login();
    message: string;
    dataError: any = [];
    valid: boolean;
    submitted: boolean = false;
    // submit button default state
    submitting: boolean = false;

    constructor(private loginService: LoginService,
        private authService: AuthService,
        private modalService: ModalService) {

        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }

    /**
     * @param login
     * Get Login Credential
     */
    loginUser(login: Login) {

        this.submitted = true; // if submitted login is true
        this.submitting = true;

        this.loginService.login(login)
            .subscribe(
                success => {
                    let data = <any>success;
                    let bodyData = data.bodyStatus;
                    this.dataError = data.Error;

                    this.submitted = false;
                    this.submitting = false;
                    // Get the redirect URL from our auth service
                    // If no redirect has been set, use the default
                    if (!bodyData) {
                        this.valid = true;
                        location.replace('/home');
                    } else {
                        this.valid = false;
                        this.error = <any>success;
                    }
                },
                error => { 
                    this.error = error;
                    this.submitting = false;
                }
            );
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.login);
    }

    display: boolean = false;
    showDialog() {
        this.display = true;
    }

    openModalRegistration(): void {
        let modal$ = this.modalService.create(AppModule, RegistrationComponent, {});
    }
    openModalForgotPassword(): void {
        let modal$ = this.modalService.create(AppModule, ForgotPasswordComponent, {});
    }

    ngOnInit() {
        let storedUsername = localStorage.getItem('Username');

        if (storedUsername) {
            this.login.UserName = storedUsername;
            this.login.RememberMe = true;
        } else {
            this.login.RememberMe = false;
        }


    }
}