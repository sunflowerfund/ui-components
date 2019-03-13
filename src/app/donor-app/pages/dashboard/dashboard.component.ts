import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from '../../services/drive-registration.service';
import { ToastrService } from 'ngx-toastr';
import { OnlineRegistrationDTO } from 'src/app/@sunflower-module/sunflower-ui/model/models';
import { ValidationService } from '../../services/validation-.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    public drive: DriveRegistrationService,
    private router: Router,
    private validationService: ValidationService,

  ) {
    this.personalDetails.bmi = this.drive.bmi;
    // console.log(this.drive.bmi);

  }
consent = false;
  personalDetails = {
    address1: null,
    address2: null,
    address3: null,
    bmi: null,
    country: 'South Africa',
    countryId: 0,
    dateOfBirth: null,
    ethnicGroup: null,
    firstContactEmail: null,
    firstContactMobile: null,
    firstContactName: null,
    firstContactRelationship: null,
    firstName: null,
    gender: 0,
    homePhone: null,
    idNumber: null,
    idType: 0,
    postalCode: null,
    provinceId: 0,
    secondContactEmail: null,
    secondContactMobile: null,
    secondContactName: null,
    secondContactRelationship: null,
    surname: null,
    titleId: 0,
    workPhone: null,
  };

  ad1 = true;

  index = 1;
  class1 = 'active indicator';
  class2 = 'indicator';
  class3 = 'indicator';
  class4 = 'indicator';

  ContactEmail: '';
  ContactMobile: '';
  ContactName: '';
  ContactRelationship: '';

  ContactEmail2: '';
  ContactMobile2: '';
  ContactName2: '';
  ContactRelationship2: '';




  buttonNext = 'Next';
  gender: number;


  ethnicity: string;

  wave1 = 0;
  wave2 = 0;
  wave3 = 0;
  wave4 = 0;
  ngOnInit() {
  }

  address1() {
    this.ad1 = !this.ad1;
  }
  validateID(idnumber) {
    this.validationService.messages.length = 0;
    if (this.validationService.identityValidation(idnumber)) {
      this.personalDetails.dateOfBirth = this.validationService.DOB;
    }



    // return this.validationService.
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
    if (gender === 'Female') { this.personalDetails.gender = 1; }
    this.personalDetails.gender = 0;
  }


  setEthnicity(ethnicity: string): void {
    this.personalDetails.ethnicGroup = ethnicity;
  }

  next(step) {
    if (step === 'step1') {
      // let wave1 = 0;
      if (this.personalDetails.firstName === null || this.personalDetails.firstName === undefined) {
        this.drive.showToaster('error', 'You First name is required to proceed');
        // ++wave1;
      }
      if (this.personalDetails.surname === null || this.personalDetails.surname === undefined) {
        this.drive.showToaster('error', 'You Last name is required to proceed');
        // ++wave1;
      }


      if (this.personalDetails.ethnicGroup === null || this.personalDetails.ethnicGroup === undefined
      ) {
        this.drive.showToaster('error', 'Please select your ethnic group tot proceed');
        // ++wave1;
      }

      if (this.personalDetails.idNumber === null || this.personalDetails.idNumber === undefined
        || this.personalDetails.idNumber.legnth < 13) {
        this.drive.showToaster('error', 'ID Number is required to proceed');
        // ++wave1;
      } else {
        if (this.validationService.identityValidation(this.personalDetails.idNumber)) {
          this.personalDetails.dateOfBirth = '2019';
          this.personalDetails.gender = this.validationService.gender;
          this.index++;
          this.setUpClass(this.index);
        } else {
          this.drive.showToaster('error', 'Please correct you ID');
          // ++wave1;
        }
      } 

    }

    if (step === 'step2') {

      this.index++;
      this.setUpClass(this.index);
    }

    if (step === 'step3') {

      this.index++; this.setUpClass(this.index);


    }
  }


  finish() {
    // this.personalDetails = ethnicity;
    console.log(this.personalDetails);
    // console.log(this.consent);
    // if (!this.consent) {
    //   this.drive.showToaster('error', 'You need to concent to All of the above mentioned');
    // }

    this.drive.sendPersonalInformation(this.personalDetails)
      .subscribe((_response: OnlineRegistrationDTO) => {
        this.drive.showToaster('success', 'Personal Details have been stored successfully');
      }, error => {
        console.log(error);
        this.drive.showToaster('error', error);
      });


    this.drive.consentToPersonalData({ 'commsInd': 1, 'hla_Confirm': 1, 'stemCell_Confirm': 1 })
      .subscribe(() => { this.router.navigate(['/medic']); }, error => {
        console.log(error);
        this.drive.showToaster('error', error);

      });



    // this.drive.sendPersonalInformation(this.personalDetails).subscribe(() => { }, error => {
    //   console.log(error);
    // });
  }

}


