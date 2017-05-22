import {Component, OnInit}                          from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {StateProvince}                              from './state-province';
import {StateProvinceService}                       from './state-province.service';

@Component({
    moduleId: module.id,
    selector: 'app-state-province',
    templateUrl: './state-province.component.html',
    styleUrls: ['./state-province.component.css'],
    providers: [StateProvinceService]
})
export class StateProvinceComponent implements OnInit {
    stateProvinces: StateProvince[];
    errorMessage: string;

    constructor(private stateProvinceService: StateProvinceService) {
    }

    /**
     * Get StateProvince
     */
    getStateProvince() {
        this.stateProvinceService.getStateProvince()
            .subscribe(
                stateProvinces => this.stateProvinces = stateProvinces,
                error => this.errorMessage = <any>error);
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.getStateProvince);
    }

    ngOnInit() {
        this.getStateProvince();
    }

}
