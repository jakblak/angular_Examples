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
require('rxjs/add/operator/do');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var TvMazeService = (function () {
    function TvMazeService(_http) {
        this._http = _http;
        this._tvMazeURL = 'https://api.tvmaze.com/search/shows';
    }
    TvMazeService.prototype.search = function (query) {
        var search = new http_1.URLSearchParams();
        search.set('q', query);
        return this._http
            .get(this._tvMazeURL, { search: search })
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(data); });
    };
    TvMazeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TvMazeService);
    return TvMazeService;
}());
exports.TvMazeService = TvMazeService;
//# sourceMappingURL=tvmaze.service.js.map