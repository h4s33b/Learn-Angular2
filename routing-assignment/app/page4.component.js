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
var Page4Component = (function () {
    function Page4Component() {
    }
    Page4Component = __decorate([
        core_1.Component({
            selector: 'page4',
            template: "\n  \t\t\t<h1>This is ng class demo.</h1>\n            <div [ngClass]=\"{bordered: false}\">This is never bordered</div>\n            <div [ngClass]=\"{bordered: true}\">This is always bordered</div>\n    ",
            styles: ["\n        .bordered {\n            border: 1px dashed black;\n            background-color: #eee;\n        }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], Page4Component);
    return Page4Component;
}());
exports.Page4Component = Page4Component;
//# sourceMappingURL=page4.component.js.map