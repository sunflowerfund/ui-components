import { Component, OnInit } from '@angular/core';
import { templateData } from 'src/assets/template-data/date';
import { DriveRegistrationService } from '../../services/drive-registration.service';
// import { Z_FINISH } from 'zlib';
import { ToastrService } from 'ngx-toastr';
import { PersonalDetailsDTO } from 'src/app/@sunflower-module/sunflower-ui/model/personalDetailsDTO';


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
  personalDetails: PersonalDetailsDTO =
    {
      address1: 'string',
      address2: 'string',
      address3: 'string',
      birthDate: 'string',
      countryId: 0,
      ethnicGroupId: 'string',
      firstContactEmail: 'string',
      firstContactMobile: 'string',
      firstContactName: 'string',
      firstContactRelationship: 0,
      firstName: 'string',
      gender: 'string',
      homePhone: 'string',
      idNumber: 'string',
      idType: 0,
      postalCode: 'string',
      provinceId: 0,
      secondContactEmail: 'string',
      secondContactMobile: 'string',
      secondContactName: 'string',
      secondContactRelationship: 0,
      surname: 'string',
      titleId: 0,
      workPhone: 'string',


  } ;

  index = 1;
  class1 = 'active indicator';
  class2 = 'indicator';
  class3 = 'indicator';
  class4 = 'indicator';




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
    this.personalDetails.ethnicGroupId = ethnicity;
  }

  showToaster() {
    this.toastr.success('Account created Successfully.');
  }


  next(step) {
    this.index++;
    this.setUpClass(this.index);
    if (step === 'step1') {
      this.drive.personalDetails.firstName = this.personalDetails.firstName;
      this.drive.personalDetails.surname = this.personalDetails.surname;
      this.drive.personalDetails.gender = this.personalDetails.gender;
      this.drive.personalDetails.idNumber = this.personalDetails.idNumber;
      this.drive.personalDetails.ethnicGroupId = this.personalDetails.ethnicGroupId;
      console.log(this.personalDetails);

    }
    if (step === 'step2') {


      this.drive.personalDetails.address1 = this.personalDetails.address1;
      this.drive.personalDetails.homePhone = this.personalDetails.homePhone;
      this.drive.personalDetails.workPhone = this.personalDetails.workPhone;

      console.log(this.personalDetails);


    }
    if (step === 'step3') {
      // this.drive.personalDetails. = this.personalDetails.firstContactName;
      this.drive.personalDetails.firstContactRelationship = this.personalDetails.firstContactRelationship;
      this.drive.personalDetails.firstContactEmail = this.personalDetails.firstContactEmail;
      this.drive.personalDetails.firstContactMobile = this.personalDetails.firstContactMobile;
    }
    if (step === 'step4') {

    }
  }

  finish() {
    console.log(this.personalDetails);
    this.drive.sendPersonalInformation(this.personalDetails);


    // this.drive.sendPersonalInformation(this.personalDetails).subscribe(() => { }, error => {
    //   console.log(error);
    // });
  }

}


