import { Component } from '@angular/core';

@Component({
  selector: 'page5',
  template: `<h1 align="center">This is ngFor Demo</h1>
  			<div align="center">Its Syntax is &lt;div *ngFor="let city of cities"&gt;&lt;div&gt;city with double braces &lt;/div&gt;&lt;/div&gt;<br><br><br></div>
  			<div *ngFor="let c of cities" align="center"><div>{{c}}<div></div> 
  			`
})
export class Page5Component {
	cities: [string];
    
    constructor(){
        this.cities = ['Karachi', 'Lahore', 'Pindi'];
    }
 }