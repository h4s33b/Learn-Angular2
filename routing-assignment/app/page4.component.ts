import { Component } from '@angular/core';

@Component({
  selector: 'page4',
  template: `
  			<h1>This is ng class demo.</h1>
            <div [ngClass]="{bordered: false}">This is never bordered</div>
            <div [ngClass]="{bordered: true}">This is always bordered</div>
    `,
    styles: [`
        .bordered {
            border: 1px dashed black;
            background-color: #eee;
        }
  `]
})
export class Page4Component { }