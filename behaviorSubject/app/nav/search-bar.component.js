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
var router_1 = require('@angular/router');
var nav_service_1 = require('./nav.service');
var SearchBarComponent = (function () {
    function SearchBarComponent(_navService, _router) {
        this._navService = _navService;
        this._router = _router;
    }
    SearchBarComponent.prototype.search = function () {
        console.log(this.query);
        this._navService.changeNav(this.query);
        this.query = '';
        this._router.navigate(["/search"]);
    };
    SearchBarComponent = __decorate([
        core_1.Component({
            selector: 'mt-search-bar',
            template: "\n  <div *ngIf=\"_router.url != '/search'\">\n    <form class=\"form-inline pull-right\" style=\"margin-top: 5px\"\n              (ngSubmit)=\"search()\">\n        <input class=\"form-control\"\n                  [(ngModel)]=\"query\"\n                   type=\"text\"\n                   name=\"query\"\n                   placeholder=\"Search\">\n        <button class=\"btn btn-outline-success\"\n                      type=\"submit\">Search\n         </button>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [nav_service_1.NavService, router_1.Router])
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=search-bar.component.js.map