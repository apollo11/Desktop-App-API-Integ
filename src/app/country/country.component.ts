import {Component, OnInit} from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {Countries} from './country';
import {CountryService} from './country.service';

@Component({
  moduleId: module.id,
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers: [CountryService]
})

export class CountryComponent implements OnInit {
  countries: Countries[];
  errorMessage: string;

  constructor(private countriesService: CountryService) { }

  /**
   * Get Countries
   */
  getCountries(){
    this.countriesService.getCountries()
        .subscribe(
            countries => this.countries = countries,
            error => this.errorMessage = <any>error);
  }
  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.getCountries);
  }

  ngOnInit() {
    this.getCountries();
  }

}
