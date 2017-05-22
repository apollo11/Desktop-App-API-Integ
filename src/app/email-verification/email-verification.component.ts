import { Component, OnInit }                from '@angular/core';
import { Router } from '@angular/router';


import 'rxjs/add/operator/toPromise';

import {EmailVerification}                  from './email-verification';
import {EmailVerificationService}           from './email-verification.service';

import { Profile } from '../profile/profile';
import { ProfileService } from '../profile/profile.service';

import { Modal } from "../elements/modal/modal.module";

@Modal()

@Component({
  moduleId: module.id,
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css'],
  providers: [
      EmailVerificationService
  ]
})

export class EmailVerificationComponent implements OnInit {

    profile: Profile[];
    error: string;
    success: string;
    valid: boolean = false;
    submitted: boolean;
    dataError: any = [];
    reset: boolean;
    hasSend: boolean = false;
    submitting:boolean = false;
    submittingResend: boolean = false;

  constructor(
      private emailVerificationService: EmailVerificationService,
      private profileService: ProfileService,
      private router: Router,
  ) { }

    verifyEmail(email:EmailVerification) {
        this.submitted = true;
        this.submitting = true;
        email.UserName = localStorage.getItem('Username');
        this.emailVerificationService.verifyEmail(email)
            .subscribe(
                success => {
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
                    this.error = <any>error;
                    this.submitting = false;
                },
            )
    }

    resetEmail(email:EmailVerification) {
        this.submitted = true;
        this.submittingResend = true;
        this.emailVerificationService.resetEmail(email)
            .subscribe(
                success => {
                    // this.success = <any>success;
                    let data = <any>success;
                    let status = data.Status;
                    console.log(status);
                    this.success = <any>success;
                    if (status == 'SUCCESS') {
                        this.submittingResend = false;
                        this.valid = true;
                        this.submitAndReload();
                    } else {
                        this.valid = false;
                        this.dataError = data.Messages;
                        this.submittingResend = false;
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

    goToProfile() {
        this.router.navigate(['/profile'])
    }

    // MODAL
    modalId: string = 'modalVerifyEmail';
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
  }

}
