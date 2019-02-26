import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sun-page-components',
  template: `

<h1>Sunflower Navbar:</h1>
<sunflower-navbar></sunflower-navbar>

<<!-- h1>Sunflower Fund Buttons:</h1>

<div style="max-width: fit-content;">
  <sunflower-button type="primary" [attrs]="[]" click="alert('Button Clicked!')">Register and become a donor!</sunflower-button>
</div>

<h1> Dropdown Menu</h1>
The Custom Dropdon Button -->
<!-- Container - Containing Dropdown 

<div style="max-width: 243.78px;">
  <sun-dropdown-menu title="choose an item" type="primary" [attrs]="[]" [items]=" ['1st item','2nd item','3rd item']"
    (output)="getOption($event)"></sun-dropdown-menu>
</div>
-->
  `
})
export class ComponentsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

dropdownOption;
  getOption(str){
    this.dropdownOption = str;
  }

}
