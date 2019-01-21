import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  index:number = 1;
  class1:string = "active indicator";
  class2:string = "indicator";
  class3:string = "indicator";
  class4:string = "indicator";

  buttonNext: string = "Next";
  constructor() { }

  ngOnInit() {
  }

  setUpClass(index){
    this.index = index;
    if(index == 1){
      this.class1 = "active indicator";
      this.class2 = "indicator";
      this.class3 = "indicator";
      this.class4 = "indicator";
      this.buttonNext = "Next";
    }
    if(index == 2){
      this.class1 = "indicator";
      this.class2 = "active indicator";
      this.class3 = "indicator";
      this.class4 = "indicator";
      this.buttonNext = "Next";
    }
    if(index == 3){
      this.class1 = "indicator";
      this.class2 = "indicator";
      this.class3 = "active indicator";
      this.class4 = "indicator";
      this.buttonNext = "Next";
    }
    if(index == 4){
      this.class1 = "indicator";
      this.class2 = "indicator";
      this.class3 = "indicator";
      this.class4 = "active indicator";
      this.buttonNext = "Submit";
    }
  }
  day:number|string;
  setDay(day:number |string):void{
    this.day = day;
  }

  month:number|string;
  setMonth(month:number |string):void{
    this.month = month;
  }

  year:number|string;
  setYear(year:number |string):void{
    this.year = year;
  }
  
  ethnicity:string;
  setEthnicity(ethnicity:string):void{
    this.ethnicity = ethnicity;
  }




}


