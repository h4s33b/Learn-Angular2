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
var Page5Component = (function () {
    function Page5Component() {
        this.cities = ['Karachi', 'Lahore', 'Pindi'];
    }
    Page5Component = __decorate([
        core_1.Component({
            selector: 'page5',
            template: "<h1 align=\"center\">This is ngFor Demo</h1>\n  \t\t\t<div align=\"center\">Its Syntax is &lt;div *ngFor=\"let city of cities\"&gt;&lt;div&gt;city with double braces &lt;/div&gt;&lt;/div&gt;<br><br><br></div>\n  \t\t\t<div *ngFor=\"let c of cities\" align=\"center\"><div>{{c}}<div></div> \n  \t\t\t"
        }), 
        __metadata('design:paramtypes', [])
    ], Page5Component);
    return Page5Component;
}());
exports.Page5Component = Page5Component;
//# sourceMappingURL=page5.component.js.map