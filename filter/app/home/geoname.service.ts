import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ICountry } from './country';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class GeonameService {
  private URL: string = "http://api.geonames.org/countryInfoJSON?username=jak00";

  constructor(private _http: Http) { }

  getCountries(): Observable<ICountry[]> {
    return this._http
        .get(this.URL)
        .map((response: Response) => <ICountry[]> response.json().geonames)
        .do(data => console.log(data))
        .catch(error => {
                console.error(error);
                return Observable.throw(error.json())
        });
    }
}