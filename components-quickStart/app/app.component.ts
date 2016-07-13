import { Component } from '@angular/core';
import { AppComponent2 } from './two.component';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1><my-app2></my-app2>',
  directives: [AppComponent2]
})
export class AppComponent { }