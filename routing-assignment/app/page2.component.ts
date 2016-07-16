import { Component } from '@angular/core';

@Component({
  selector: 'page2',
  template: ` <h1>This is ngIf demo.</h1>
  			  <div align="center">Its Syntax is &lt;div *ngIf="condition"&gt;Any thing you want to show &lt;/div&gt;<br><br><br></div>
  			  <div *ngIf="false">This will not show</div>
              <div *ngIf="true">This will show because i have just written true in condition</div>
              <div *ngIf="a > b">This will show because 5 is greater then 4. (a=5 and b=4)</div>
              <div *ngIf="myFunction()">This will show because function returns a true value</div>
    `
})
export class Page2Component { 
	a: number;
    b: number;
    
    constructor(){
        this.a = 5;
        this.b = 4;
    }
    
    myFunction(){
        return true;
    }
}