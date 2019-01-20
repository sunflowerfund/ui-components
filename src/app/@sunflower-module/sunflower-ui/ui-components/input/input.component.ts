import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `

  <input [(ngModel)] = "outputText" (keyup) = "validate()" type="{{type}}" [class]="buildInput" placeholder="{{placeholder}}">

  `,
})
export class InputComponent implements OnInit {
  @Input()
  type: string;
  @Input()
  placeholder: string;
  @Input()
  attrs: string[] = [];

  state: boolean;

  outputText: string = "";
  constructor() { }

  ngOnInit() {
  }
  get buildInput(): string {
    return `input input-${this.type} ${
      this.attrs ? this.attrs.join().replace(",", " ") : ""
    }`;
  }

  validate(){

    if(this.type == "password"){
      if(this.outputText.length < 8){
        this.attrs.push('--warning')
      }else{
        this.attrs = [];
        this.attrs.push('--success')
      }
    }

    if(this.type == "text"){
      // if(this.outputText.length < 8){
      //   this.attrs.push('--warning')
      // }else{
      //   this.attrs = [];
      //   this.attrs.push('--success')
      // }
    }

    // if(this.outputText == ""){
    //   this.attrs = [];
    //   this.attrs.push('--success')
    // }

  }

  showPassword(state){
   
  }

}
