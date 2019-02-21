import { Component, OnInit, ViewChild } from '@angular/core';
import { DriveRegistrationService } from '../../services/drive-registration.service';

@Component({
  selector: 'app-drive-registration',
  templateUrl: './drive-registration.component.html',
  styleUrls: ['./drive-registration.component.css']
})


export class DriveRegistrationComponent {

  steps;

  constructor(public driveReg: DriveRegistrationService) {
    this.steps = this.driveReg.step;
  }
}
