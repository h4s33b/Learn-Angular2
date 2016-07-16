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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "This is routing Assignment.";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1 align=\"center\">{{title}}</h1>\n              <a [routerLink]=\"['/page1']\">Hello World</a>\n              <a [routerLink]=\"['/page2']\">Ng-if</a>\n              <a [routerLink]=\"['/page3']\">Events</a>\n              <a [routerLink]=\"['/page4']\">Ng-class</a>\n              <a [routerLink]=\"['/page5']\">Ng-for</a>\n              <router-outlet></router-outlet>",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map