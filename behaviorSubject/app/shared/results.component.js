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
var nav_service_1 = require('../nav/nav.service');
var tvmaze_service_1 = require('./tvmaze.service');
var ResultsComponent = (function () {
    function ResultsComponent(_tvMazeService, _navService) {
        this._tvMazeService = _tvMazeService;
        this._navService = _navService;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.getQuery();
        this.searchFromNav();
    };
    ResultsComponent.prototype.getQuery = function () {
        var _this = this;
        this.subscription = this._navService.navItem$
            .subscribe(function (item) { return _this.item = item; }, function (err) { return _this.error = err; });
    };
    ResultsComponent.prototype.searchFromNav = function () {
        var _this = this;
        if (this.item) {
            this._tvMazeService
                .search(this.item)
                .subscribe(function (shows) {
                console.log(shows);
                _this.shows = shows;
            }, function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    ResultsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ResultsComponent = __decorate([
        core_1.Component({
            selector: '',
            template: "\n  <div class=\"container\">\n    <!-- Show list -->\n    <table class=\"table table-bordered table-hover table-fixed-header\" *ngIf=\"shows\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">Name</th>\n          <th class=\"text-center\">Image</th>\n          <th class=\"text-center\">Network</th>\n          <th class=\"text-center\">Summary</th>\n          <th class=\"text-center\">Status</th>\n        </tr>\n      </thead>\n        <tbody>\n        <tr *ngFor=\"let show of shows\">\n          <td><h5>{{ show.show.name }}</h5></td>\n          <td>\n            <img [src]=\"show.show.image?.medium\">\n          </td>\n          <td>{{ show.show.network?.name }}</td>\n          <!-- get back HTML, so need to bind to innerHtml -->\n          <td [innerHtml]=\"show.show.summary\"></td>\n          <td>\n            <h5>\n            <span [ngClass]=\"{'bg-success text-white': show.show.status === 'Running', 'bg-danger': show.show.status !== 'Running'}\" >\n               {{ show.show.status }}\n             </span>\n             </h5>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"has-error\" *ngIf=\"error\">{{ error }}</div>\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [tvmaze_service_1.TvMazeService, nav_service_1.NavService])
    ], ResultsComponent);
    return ResultsComponent;
}());
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=results.component.js.map