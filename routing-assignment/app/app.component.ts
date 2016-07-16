import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'my-app',
  template: `<h1 align="center">{{title}}</h1>
              <a [routerLink]="['/page1']">Hello World</a>
              <a [routerLink]="['/page2']">Ng-if</a>
              <a [routerLink]="['/page3']">Events</a>
              <a [routerLink]="['/page4']">Ng-class</a>
              <a [routerLink]="['/page5']">Ng-for</a>
              <router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { 
  title: string;

  constructor(){
    this.title = "This is routing Assignment.";
  }
}
