import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sun-indicator',
  template: `
    <ul>
      <li class = "active indicator">1</li>
      <li class = "indicator">2</li>
      <li class = "indicator">3</li>
      <li class = "indicator">4</li>
      <li class = "indicator">5</li>
      <li class = "indicator">6</li>
      <li class = "indicator">7</li>
    </ul>  
  `,

})
export class CircularIndicatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
