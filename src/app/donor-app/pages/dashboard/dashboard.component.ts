import { Component, OnInit } from '@angular/core';
import { templateData } from 'src/assets/template-data/date';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() {
    this.Days = templateData.Days;
    this.Months = templateData.Months;
    this.Years = templateData.Years;
  }

  idnumber


  index = 1;
  class1 = "active indicator";
  class2 = 'indicator';
  class3 = 'indicator';
  class4 = 'indicator';
  Days;
  Months;
  Years;


  buttonNext = 'Next';
  gender: string;

  day: number | string;

  month: number | string;

  year: number | string;

  ethnicity: string;

  ngOnInit() {
  }


  validateID() {
    console.log('qwertyuiop');
    
  }
  setUpClass(index) {
    this.index = index;
    if (index === 1) {
      this.class1 = 'active indicator';
      this.class2 = 'indicator';
      this.class3 = 'indicator';
      this.class4 = 'indicator';
      this.buttonNext = 'Next';
    }
    if (index === 2) {
      this.class1 = 'indicator';
      this.class2 = 'active indicator';
      this.class3 = 'indicator';
      this.class4 = 'indicator';
      this.buttonNext = 'Next';
    }
    if (index === 3) {
      this.class1 = 'indicator';
      this.class2 = 'indicator';
      this.class3 = 'active indicator';
      this.class4 = 'indicator';
      this.buttonNext = 'Next';
    }
    if (index === 4) {
      this.class1 = 'indicator';
      this.class2 = 'indicator';
      this.class3 = 'indicator';
      this.class4 = 'active indicator';
      this.buttonNext = 'Submit';
    }
  }
  setGender(gender: string) {
    this.gender = gender;
  }
  setDay(day: number | string): void {
    this.day = day;
  }
  setMonth(month: number | string): void {
    this.month = month;
  }
  setYear(year: number | string): void {
    this.year = year;
  }
  setEthnicity(ethnicity: string): void {
    this.ethnicity = ethnicity;
  }




}


