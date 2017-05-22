import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Registration } from './registration';
import { RegistrationService } from './registration.service';

import { Countries } from '../country/country';
import { CountryService } from '../country/country.service';


import { AppModule } from "../app.module";
import { Modal, ModalService } from "../elements/modal/modal.module";
import { SuccessModalComponent } from "../elements/modal/success-modal.component";


@Component({
    moduleId: module.id,
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css'],
    providers: [
        RegistrationService,
        CountryService]
})

@Modal()

export class RegistrationComponent implements OnInit {

    error: string;
    success: string;
    dataError: any = [];
    submitted: boolean = false;

    registration = new Registration();
    countries: Countries[];

    // submit button default state
    submitting: boolean = false;

    constructor(private regService: RegistrationService,
        private modalService: ModalService,
        private route: ActivatedRoute,
        private countriesService: CountryService) {
    }

    // Validate Form
    validateForm() {
        this.addUser(this.registration);
    }

    // Add User Service Call
    addUser(reg: Registration) {
        this.submitting = true;
        this.regService.create(reg)
            .subscribe(
            success => {
                this.success = <any>success;
                let data = <any>success;
                let bodyData = data.bodyStatus;
                this.dataError = data.Error;
                this.submitting = false;
                if (!bodyData) {
                    this.openModal();
                }
            },
            error => {
                this.error = <any>error,
                this.submitting = false;
            });
    }

    // Get Countries Service Call
    getCountries() {
        this.countriesService.getCountries()
            .subscribe(
            countries => this.countries = countries,
            error => this.error = <any>error);
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.registration);
    }

    // Open Next Modal;
    // Show Secruity Questions Modal
    openModal() {
        // Close Existing Modal
        this.closeModal();
        this.destroy();

        // Call new modal
        this.modalService.create(AppModule, SuccessModalComponent, {
            successType: 'register'
        });
    }

    // MODAL
    modalId: string = 'modalRegister';
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
        // this.ok = this.addUser;
    }

    onSubmit() {
        this.submitted = true;
        this.validateForm();
    }

    ngOnInit() {
        this.getCountries();
        this.registration.MobileCountryCodeNumber = '+86';
    }
}
