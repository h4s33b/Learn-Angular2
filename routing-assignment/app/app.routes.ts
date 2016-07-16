import { provideRouter, RouterConfig }  from '@angular/router';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';
import { Page3Component } from './page3.component';
import { Page4Component } from './page4.component';
import { Page5Component } from './page5.component';

export const routes: RouterConfig = [
  {
    path: 'page2',
    component: Page2Component
  },
  {
    path: 'page3',
    component: Page3Component
  },
  {
    path: 'page4',
    component: Page4Component
  },
  {
    path: 'page5',
    component: Page5Component
  },
  { path: '', 
    component: Page1Component 
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];



