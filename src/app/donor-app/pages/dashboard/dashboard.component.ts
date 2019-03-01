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

  ) { this.ad1 = true; }

  personalDetails = {
    address1: '',
    address2: '',
    address3: '',
    bmi: '',
    country: '',
    countryId: 0,
    dateOfBirth: '',
    ethnicGroupId: 0,
    firstContactEmail: '',
    firstContactMobile: '',
    firstContactName: '',
    firstContactRelationship: '',
    firstName: '',
    gender: 0,
    homePhone: '',
    idNumber: '',
    idType: 0,
    postalCode: '',
    provinceId: 0,
    secondContactEmail: '',
    secondContactMobile: '',
    secondContactName: '',
    secondContactRelationship: '',
    surname: '',
    titleId: 0,
    workPhone: '',
  };

  ad1;

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

  ngOnInit() {
  }

  address1() {
    this.personalDetails.firstContactEmail = this.ContactEmail;
    this.personalDetails.firstContactMobile = this.ContactMobile;
    this.personalDetails.firstContactName = this.ContactName;
    this.personalDetails.firstContactRelationship = this.ContactRelationship;
    console.log(this.personalDetails.firstContactEmail);
    console.log(this.personalDetails.firstContactMobile);
    console.log(this.personalDetails.firstContactName);
    console.log(this.personalDetails.firstContactRelationship);


    this.ad1 = !this.ad1;
  }
  validateID(idnumber) {
    this.validationService.messages.length = 0;
    this.validationService.identityValidation(idnumber);


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
    // this.personalDetails.ethnicGroupId = ethnicity;
  }




  next(step) {
    if (step === 'step1') {
      if (this.validationService.identityValidation(this.personalDetails.idNumber)) {
        this.index++;
        this.setUpClass(this.index);

      }
      if (this.validationService.messages.length > 0) {
        for (let index = 0; index < this.validationService.messages.length; index++) {
          this.drive.showToaster('error', this.validationService.messages[index]);

        }
      }

      // console.log(this.personalDetails);
      // this.personalDetails.birthDate

    }
    if (step === 'step2') {
      console.log(this.personalDetails);
      this.index++;
      this.setUpClass(this.index);
    }

    if (step === 'step3') {
      this.personalDetails.secondContactEmail = this.ContactEmail2;
      this.personalDetails.secondContactMobile = this.ContactMobile2;
      this.personalDetails.secondContactName = this.ContactName2;
      this.personalDetails.secondContactRelationship = this.ContactRelationship2;
      this.index++; this.setUpClass(this.index);
      console.log(this.personalDetails);

    }
    // if (step === 'step4') {  }
  }

  finish() {
    // this.personalDetails = ethnicity;
    console.log(this.personalDetails);
    this.drive.sendPersonalInformation(this.personalDetails)
      .subscribe((_response: OnlineRegistrationDTO) => {

        this.drive.showToaster('success', 'Personal Details have been stored successfully');
        this.router.navigate(['/medic']);
      }, error => {
        console.log(error);
        this.drive.showToaster('error', error);

      });


    // this.drive.sendPersonalInformation(this.personalDetails).subscribe(() => { }, error => {
    //   console.log(error);
    // });
  }

}


