import { Component, OnInit } from '@angular/core';
import { templateData } from 'src/assets/template-data/date';
import { DriveRegistrationService } from '../../services/drive-registration.service';
// import { Z_FINISH } from 'zlib';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    public drive: DriveRegistrationService,
    private toastr: ToastrService,

  ) {

  }
  personalDetails = {
    firstName: '',
    lastName: '',
    idNumber: '',
    gender: '',
    ethnicity: '',

    Address: '',
    homeTelephone: '',
    workTelephone: '',
    mobile: '',

    emergency: [
      {
      emergencyFullContactName: '',
      relationship: '',
      emergencyEmail: '',
      EmergencyMobile: '',
    }
  ],
    consent: true,


  };

  index = 1;
  class1 = 'active indicator';
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
    this.personalDetails.gender = gender;
  }
  // setDay(day: number | string): void {
  //   this.day = day;
  // }
  // setMonth(month: number | string): void {
  //   this.month = month;
  // }
  // setYear(year: number | string): void {
  //   this.year = year;
  // }
  setEthnicity(ethnicity: string): void {
    this.personalDetails.ethnicity = ethnicity;
  }

  showToaster() {
    this.toastr.success('Account created Successfully.');
  }


  next(step) {
    this.index++;
    this.setUpClass(this.index);
    if (step === 'step1') {
      this.drive.personalDetails.firstName = this.personalDetails.firstName;
      this.drive.personalDetails.lastName = this.personalDetails.lastName;
      this.drive.personalDetails.gender = this.personalDetails.gender;
      this.drive.personalDetails.idNumber = this.personalDetails.idNumber;
      this.drive.personalDetails.ethnicity = this.personalDetails.ethnicity;
    }
    if (step === 'step2') {


      this.drive.personalDetails.Address = this.personalDetails.Address;
      this.drive.personalDetails.homeTelephone = this.personalDetails.homeTelephone;
      this.drive.personalDetails.workTelephone = this.personalDetails.workTelephone;
      this.drive.personalDetails.mobile = this.personalDetails.mobile;


    }
    if (step === 'step3') {
      // this.drive.personalDetails.Address = this.personalDetails.emergency;
      // this.drive.personalDetails.homeTelephone = this.personalDetails.homeTelephone;
      // this.drive.personalDetails.workTelephone = this.personalDetails.workTelephone;
      // this.drive.personalDetails.mobile = this.personalDetails.mobile;
    }
    if (step === 'step4') {

    }
  }

  finish() {
    console.log(this.personalDetails);


    // this.drive.sendPersonalInformation(this.personalDetails).subscribe(() => { }, error => {
    //   console.log(error);
    // });
  }

}


