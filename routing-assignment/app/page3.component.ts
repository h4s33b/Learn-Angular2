import { Component } from '@angular/core';

@Component({
  selector: 'page3',
  template: `  <div>This is Click Event Demo. When you click on button it will fire an event and a function will be called and that will increment Counter variable.</div>
  			   <div> {{counter}}</div>
               <button (click)="addCounter()">Add</button>
              `
})
export class Page3Component { 
	counter: number;
    constructor() {
        this.counter = 0;
    }
    
    addCounter(): void {
        this.counter++;
    }
}