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
var socket_service_1 = require('../shared/socket.service');
var HomeComponent = (function () {
    function HomeComponent(_socketService) {
        this._socketService = _socketService;
        this.avatar = 'https://api.adorable.io/avatars/30/abott@adorable.png';
        this.selfAuthored = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages = new Array();
        this._socketService.on('message-received', function (msg) {
            _this.messages.push(msg);
            console.log(msg);
            console.log(_this.messages);
        });
    };
    HomeComponent.prototype.sendMessage = function () {
        var message = {
            text: this.messageText,
            date: Date.now(),
            imageUrl: this.avatar
        };
        this._socketService.emit('send-message', message);
        this.messageText = '';
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ng-home',
            styleUrls: ['home.styles.css'],
            templateUrl: 'home.template.html'
        }), 
        __metadata('design:paramtypes', [socket_service_1.SocketService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map