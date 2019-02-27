import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from '../../services/drive-registration.service';
import { ToastrService } from 'ngx-toastr';
import { OnlineRegistrationDTO } from 'src/app/@sunflower-module/sunflower-ui/model/models';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    public drive: DriveRegistrationService,
    private toastr: ToastrService,
  ) { }

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



  index = 1;
  class1 = 'active indicator';
  class2 = 'indicator';
  class3 = 'indicator';
  class4 = 'indicator';




  buttonNext = 'Next';
  gender: number;


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
    if (gender === 'Female') { this.personalDetails.gender = 1; }
        this.personalDetails.gender = 0;

  }


  setEthnicity(ethnicity: string): void {
    // this.personalDetails.ethnicGroupId = ethnicity;
  }




  next(step) {
    this.index++;
    this.setUpClass(this.index);
    if (step === 'step1') {

      console.log(this.personalDetails);
      // this.personalDetails.birthDate

    }
    if (step === 'step2') {
      console.log(this.personalDetails);
    }
    if (step === 'step3') { }
    if (step === 'step4') {

    }
  }

  finish() {
    // this.personalDetails = ethnicity;
    console.log(this.personalDetails);
    this.drive.sendPersonalInformation(this.personalDetails)
      .subscribe((_response: OnlineRegistrationDTO) => {

        this.drive.showToaster('success', 'Personal Details have been stored successfully');
        // this.router.navigate(['/u/new/form']);
      }, error => {
        console.log(error);
        this.drive.showToaster('error', error);

      });


    // this.drive.sendPersonalInformation(this.personalDetails).subscribe(() => { }, error => {
    //   console.log(error);
    // });
  }

}


