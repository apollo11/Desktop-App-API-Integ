import { Component, OnInit }    from '@angular/core';

import {ChangePasswordService}  from './change-password.service';
import {ChangePassword}         from './change-password';


@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.css'],
    providers:[ChangePasswordService]
})
export class ChangePasswordComponent implements OnInit {

    success: any;
    error: any;
    changePassword = new ChangePassword();
    valid: boolean = false;
    submitting: boolean = false;
    dataError: any = [];

  constructor(private changePasswdService:ChangePasswordService) { }

    setPasswd(passwd: ChangePassword) {
      this.submitting = true;
        this.success='';
        this.error='';
        this.changePasswdService.setChangePasswd(passwd)
            .subscribe(
                success => {
                    this.success = <any>success;
                    this.submitting = false;
                    this.valid = false;

                    let data = <any>success;
                    let bodyData = data.Status;

                    if (bodyData == 'SUCCESS') {
                        this.valid = true;
                    } else {
                        this.dataError = data.Messages;
                    }
                },
                error => {

                    this.submitting = false;
                    this.valid = true;
                    this.error = <any>error;
                }
            )
    }

  ngOnInit() {
  }

}
