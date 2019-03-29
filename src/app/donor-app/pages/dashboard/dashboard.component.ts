import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from '../../services/drive-registration.service';
import { ToastrService } from 'ngx-toastr';
import { OnlineRegistrationDTO, CountryCodeDTO } from 'src/app/@sunflower-module/sunflower-ui/model/models';
import { ValidationService } from '../../services/validation-.service';
import { Router } from '@angular/router';
import { EthnichGroup } from 'src/app/@sunflower-module/sunflower-ui/model/ethnicgroup.model';
import { Relationship } from 'src/app/@sunflower-module/sunflower-ui/model/relationships.model';


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
    this.personalDetails.email = this.drive.email;
    this.personalDetails.mobile = this.drive.cellnumber;
  }
  consent = false;
  personalDetails = {

    email: null,
    mobile: null,



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
  ethnicGroup = [];
  countries = [];
  relations = [];
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
    this.drive.getEthnicGroups().subscribe((res: EthnichGroup[]) => {
      res.forEach(element => {
        this.ethnicGroup.push(element.ethnicGroup);
      });
    });

    this.drive.getCountryCodes().subscribe((res: CountryCodeDTO[]) => {
      res.forEach(element => {
        this.countries.push(element.country)
      });
    });
    this.drive.getRelationships().subscribe((res: Relationship[]) => {
      res.forEach(element => {
        this.relations.push(element.relationship);
      });
    });
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
  // myconsent(){
  //   console.log(`consent [poi]`);

  // }
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
  setCountry(country: string) {
    this.personalDetails.country = country;
  }


  setEthnicity(ethnicity: string): void {
    this.personalDetails.ethnicGroup = ethnicity;
  }


  setFirstRelations(firstRelation: string): void {
    this.personalDetails.firstContactRelationship = firstRelation;
  }
  setSecondRelations(secondRelation: string): void {
    this.personalDetails.firstContactRelationship = secondRelation;
  }

  next(step) {
    if (step === 'step1') {
      // let wave1 = 0;
      if (this.personalDetails.firstName === null || this.personalDetails.firstName === undefined) {
        this.drive.showToaster('error', 'You First name is required to proceed');
      } else {
        if (this.personalDetails.surname === null || this.personalDetails.surname === undefined) {
          this.drive.showToaster('error', 'You Last name is required to proceed');
        } else {
          if (this.personalDetails.ethnicGroup === null || this.personalDetails.ethnicGroup === undefined
          ) {
            this.drive.showToaster('error', 'Please select your ethnic group tot proceed');
          } else {
            if (this.personalDetails.idNumber === null || this.personalDetails.idNumber === undefined
              || this.personalDetails.idNumber.legnth < 13) {
              this.drive.showToaster('error', 'ID Number is required to proceed');
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
        }
      }
    }

    if (step === 'step2') {

      this.index++;
      this.setUpClass(this.index);

      if (this.personalDetails.address1 === null || this.personalDetails.address1 === undefined) {
        this.drive.showToaster('error', 'Please add your line One of Address');
      } else {
        if (this.personalDetails.address2 === null || this.personalDetails.address2 === undefined) {
          this.drive.showToaster('error', 'Please add your line two of Address');
        } else {
          if (this.personalDetails.address3 === null || this.personalDetails.address3 === undefined) {
            this.drive.showToaster('error', 'Please add your line three of Address');
          } else {
            if (this.personalDetails.homePhone === null || this.personalDetails.homePhone === undefined) {
              this.drive.showToaster('error', 'Please add your Home number');
            } else {
              if (this.personalDetails.workPhone === null || this.personalDetails.workPhone === undefined) {
                this.drive.showToaster('error', 'Please add your Work number');
              }
            }
          }
        }
      }
    }

    if (step === 'step3') {

      this.index++;
      this.setUpClass(this.index);


    }
  }


  finish() {
    this.personalDetails.email = this.drive.email;
    this.personalDetails.mobile = this.drive.cellnumber;
    console.log(this.personalDetails);
    // console.log(this.consent);
    // if (!this.consent) {
    //   this.drive.showToaster('error', 'You need to concent to All of the above mentioned');
    // }

    this.drive.sendPersonalInformation(this.personalDetails)
      .subscribe((_response: OnlineRegistrationDTO) => {
        this.drive.showToaster('info', 'Personal Details have been stored successfully');
      }, error => {
        console.log(error);
        this.drive.showToaster('error', error);
      });


    this.drive.consentToPersonalData(this.drive.consented)
      .subscribe(() => { this.router.navigate(['/medic']); }, error => {
        console.log(error);
        this.drive.showToaster('error', error);

      });



    // this.drive.sendPersonalInformation(this.personalDetails).subscribe(() => { }, error => {
    //   console.log(error);
    // });
  }

}


