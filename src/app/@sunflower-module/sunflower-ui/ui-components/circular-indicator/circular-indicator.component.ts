import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sun-indicator',
  template: `
    <ul>
      <li (click) = "setUpClass(1)" [class] = "class1">1</li>
      <li (click) = "setUpClass(2)" [class] = "class2">2</li>
      <li (click) = "setUpClass(3)" [class] = "class3">3</li>
    </ul>  
    <button (click) = "setUpClass((index+1))">button</button>
  `,

})
export class CircularIndicatorComponent implements OnInit {
  index:number = 1;
  class1:string = "active indicator";
  class2:string = "indicator";
  class3:string = "indicator";
  constructor() { }

  ngOnInit() {
  }

  setUpClass(index){
    this.index = index;
    if(index == 1){
      this.class1 = "active indicator";
      this.class2 = "indicator";
      this.class3 = "indicator";
    }
    if(index == 2){
      this.class1 = "indicator";
      this.class2 = "active indicator";
      this.class3 = "indicator";
    }
    if(index == 3){
      this.class1 = "indicator";
      this.class2 = "indicator";
      this.class3 = "active indicator";
    }
  }

}
