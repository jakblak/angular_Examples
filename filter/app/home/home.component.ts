import { Component, OnInit } from '@angular/core';
import { GeonameService } from './geoname.service';
import { ICountry } from './country';

@Component({
    moduleId: module.id,
    selector: 'ng-home',
    templateUrl: 'home.template.html'
})

export class HomeComponent {

  constructor(private _geonameService: GeonameService) {}

  countries: ICountry[];
  copyCountries: ICountry[] = [];
  errorMessage: string;

  loadCountries() {
    this._geonameService.getCountries()
      .subscribe(
        countries => this.countries = countries,
        error => this.errorMessage = <any>error,
        () => this.copyCountries = this.countries
        );
  }

  filterBy(filter: string) {
    switch(filter) {
      case 'all':
      this.countries = this.copyCountries;
      console.log('all countries clicked');
      break;
    case 'europe':
      this.countries = this.countries.filter(country => {
        return country.continentName.toLowerCase().includes('europe');
      });
      console.log('show only european countries');
      break;
   case 'pop':
     this.countries = this.countries.filter(country => {
       return parseInt(country.population) > 1000000;
     });
     console.log('show population > 1M');
     break;
   }
  }

}
