import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drive-registration',
  templateUrl: './drive-registration.component.html',
  styleUrls: ['./drive-registration.component.css']
})
export class DriveRegistrationComponent implements OnInit {
  item1 : boolean;
  constructor() {
    this.item1 = false;
   }

  ngOnInit() {
  }

  setItem1(val ){
    this.item1 =  val;
  }
}
