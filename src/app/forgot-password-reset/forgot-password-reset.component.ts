import { Component, OnInit } from '@angular/core';
import {Router}                     from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { ResetPassword } from './forgot-password-reset';
import { ForgotPasswordResetService } from './forgot-password-reset.service';

import { ForgotPassword } from '../forgot-password/forgot-password';
import { ForgotPasswordService } from '../forgot-password/forgot-password.service';

import { AppModule } from "../app.module";
import { Modal, ModalService } from "../elements/modal/modal.module";
import { SuccessModalComponent } from "../elements/modal/success-modal.component";


@Component({
  moduleId: module.id,
  selector: 'app-forgot-password-reset',
  templateUrl: './forgot-password-reset.component.html',
  styleUrls: ['./forgot-password-reset.component.css'],
  providers: [
    ForgotPasswordResetService,
    ForgotPasswordService
  ]
})

@Modal()

export class ForgotPasswordResetComponent implements OnInit {

  resetPassword = new ResetPassword();
  forgotPassword = new ForgotPassword();
  errorMessage: string;
  successMessage: string;

  setUserName: string;
  setEmail: string;
  setMobileCountryCode: string;
  setMobileNo: string;
  dataError: any = [];
  submitted: boolean;

  // submit button default state
  submitting: boolean = false;
  submittingResend: boolean = false;
  successPasswd: string;
  valid: boolean;

  constructor(private forgotPasswordResetService: ForgotPasswordResetService,
    private forgotPasswordService: ForgotPasswordService,
    private modalService: ModalService,
    private router: Router) { }

  /**
   *
   * @param reset
   * resending a new code to client side
   */

  sendResetCode(reset: ForgotPassword) {
    this.submittingResend = true;
    this.valid = true;
    this.setUserName = localStorage.getItem('PasswordResetUserName');
    this.setEmail = localStorage.getItem('PasswordResetEmail');
    this.setMobileCountryCode = localStorage.getItem('PasswordResetMobileCountryCode');
    this.setMobileNo = localStorage.getItem('PasswordResetMobileNo');

    if (this.setEmail == 'undefined') {
      this.setEmail = '';
    }
    if (this.setMobileCountryCode == 'undefined') {
      this.setMobileCountryCode = '';
    }
    if (this.setMobileNo == 'undefined') {
      this.setMobileNo = '';
    }

    reset.UserName = this.setUserName;
    reset.Email = this.setEmail;
    reset.MobileCountryCode = this.setMobileCountryCode;
    reset.MobileNo = this.setMobileNo;

    this.forgotPasswordService.sendResetCode(reset)
      .subscribe(
        success => {
            this.submittingResend = false;
            let data = <any>success;
          let status = data.Status;
          if(status == 'SUCCESS') {
            this.successMessage = <any>success;
          }
        },
        error => {
          this.errorMessage = <any>error;
          this.submittingResend = false;
        }
      );
  }

  /**
   *
   * @param reset
   * requesting code to reset the password
   */
  setPassword(reset: ResetPassword) {
      this.submitting = true;
     this.valid = false;
      this.forgotPasswordResetService.setPassword(reset)
        .subscribe(
          success =>{
              this.submitted = true;
              this.submitting = false;
              this.successPasswd = <any>success;
              let data = <any>success;
              let status = data.Status;
              let msg = data.Messages;
              if (status == 'SUCCESS') {
                  this.onOk();
              } else {
                  this.dataError = msg;
              }
          },
          error => {
            this.errorMessage = <any>error;
            this.submitting = false;
          }
      );
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.resetPassword);
  }

  // Validate Form
  // validateForm() {
  //   // connect to api after validation
  //   this.setPassword;
  //
  //   // Close Modal
  //   this.closeModal();
  //   this.destroy();
  //
  //   // Open Next Modal
  //   this.openModal();
  // }

  // Open Next Modal; 
  // Show Secruity Questions Modal
  openModal() {
    this.modalService.create(AppModule, SuccessModalComponent, {
      successType: 'changePassword'
    });
  }

  // MODAL
  modalId: string = 'modalForgotPasswordReset';
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
    this.router.navigate(['/login']);
    // this.ok =;
  }

  onSubmit(resetPassword) {
      console.log(resetPassword);
      console.log('ok');
      this.setPassword(resetPassword);
    //this.validateForm();
    this.submitted = true;
  }

  ngOnInit() {
  }

}
