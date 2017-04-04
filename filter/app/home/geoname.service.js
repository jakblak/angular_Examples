"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/do');
var GeonameService = (function () {
    function GeonameService(_http) {
        this._http = _http;
        this.URL = "http://api.geonames.org/countryInfoJSON?username=jak00";
    }
    GeonameService.prototype.getCountries = function () {
        return this._http
            .get(this.URL)
            .map(function (response) { return response.json().geonames; })
            .do(function (data) { return console.log(data); })
            .catch(function (error) {
            console.error(error);
            return Observable_1.Observable.throw(error.json());
        });
    };
    GeonameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GeonameService);
    return GeonameService;
}());
exports.GeonameService = GeonameService;
//# sourceMappingURL=geoname.service.js.map