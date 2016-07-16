"use strict";
var router_1 = require('@angular/router');
var page1_component_1 = require('./page1.component');
var page2_component_1 = require('./page2.component');
var page3_component_1 = require('./page3.component');
var page4_component_1 = require('./page4.component');
var page5_component_1 = require('./page5.component');
exports.routes = [
    {
        path: 'page2',
        component: page2_component_1.Page2Component
    },
    {
        path: 'page3',
        component: page3_component_1.Page3Component
    },
    {
        path: 'page4',
        component: page4_component_1.Page4Component
    },
    {
        path: 'page5',
        component: page5_component_1.Page5Component
    },
    { path: '',
        component: page1_component_1.Page1Component
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map