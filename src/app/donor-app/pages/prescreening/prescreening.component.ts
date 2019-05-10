import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from '../../services/drive-registration.service';
import { PreScreeeningQuestion } from 'src/app/@sunflower-module/sunflower-ui/model/preScreeningQuestion.model';
import { PreScreeningAnswers } from 'src/app/@sunflower-module/sunflower-ui/model/preScreening.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OnlineRegistrationDTO } from 'src/app/@sunflower-module/sunflower-ui/model/onlineRegistrationDTO';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-prescreening',
  templateUrl: './prescreening.component.html',
  styleUrls: ['./prescreening.component.css']
})
export class PrescreeningComponent implements OnInit {
  cellnumber: string;
  email: string;
  send;
  invalidPrescreening = 0;
  answerResponse = {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: '',
    p6: 0,
    p7: 0,
    p8: 0,
    p9: 0,
    p10: 0,
    // mobile: 'this.cellnumber',
    // email: 'this.email',
  };

  prestine = [];
  answerElements = [];
  selectedAnswer = [];
  questions: PreScreeeningQuestion[];
  preScreeningAnswers: PreScreeningAnswers[];
  bodyText= 'Unfortunately your BMI is too Low therefore you do not qualify to become a Donor,  though we have saved your email addresss  to keep you updated with our latest offerings and events'

  constructor(
    public drive: DriveRegistrationService,
    public router: Router,
    private toastr: ToastrService,

  ) { }

  getData() {
    this.drive.getPrescreeningQuestion().subscribe((response) => {
      this.questions = response;
      // console.log(this.questions);
    }, error => {
      console.log(error);

    });
  }

  closeModal(modal){
    this.drive.close(modal);
  }

  reply() {
    this.drive.email = this.email;
    this.drive.cellnumber = this.cellnumber;

    for (let index = 0; index < this.questions.length; index++) {
      this.answerElements[index] = this.questions[index].answer;
    }
    this.drive.weight = this.answerElements[3];
    this.drive.height = this.answerElements[2];

    // tslint:disable-next-line:radix
    if (
      this.drive.weight !== null || this.drive.weight !== undefined &&
      this.drive.height !== null || this.drive.height !== undefined &&
     ( isFinite(this.drive.height)) === false && (isFinite(this.drive.weight) === false )
    ) {
      this.drive.bmi = ((this.drive.weight / (this.drive.height * this.drive.height) * 10000).toFixed(2));
      // console.log('Its a number ', (isNaN(this.drive.height) !== true) );
      // console.log('Its a number ', this.drive.weight) ;
      // console.log('Its a number ',  this.drive.height  );

      // window.alert(`Your BMI is: ${this.drive.bmi} ${(!isNaN(this.drive.height))}`);
      if (parseInt(this.drive.bmi) < 18.5 ) {
        this.drive.showToaster('warn', 'BMI too low can not proceed');
        this.drive.open('BMI-Too-low');
        // ++this.invalidPrescreening;
        
      }

    } else {
      this.drive.showToaster('error', 'Please check your Height and Weight');
      ++this.invalidPrescreening;
    }



    this.answerResponse.p1 = this.answerElements[0];
    this.answerResponse.p2 = this.answerElements[1];
    this.answerResponse.p3 = this.answerElements[2];
    this.answerResponse.p4 = this.answerElements[3];
    this.answerResponse.p5 = this.answerElements[4];
    this.answerResponse.p6 = this.answerElements[5];
    this.answerResponse.p7 = this.answerElements[6];
    this.answerResponse.p8 = this.answerElements[7];
    this.answerResponse.p9 = this.answerElements[8];
    this.answerResponse.p10 = this.answerElements[9];
    // this.drive.bmi = this.answerElements[3] / Math.pow(this.answerElements[4], 2);

    for (let index = 0; index < this.answerElements.length; index++) {
      if (this.answerElements[index] === undefined || this.answerElements[index] === null) {
        this.invalidPrescreening += index;
        // console.log(this.invalidPrescreening);
      }

    }
    if (
      this.email === '' || this.email === undefined ||
      this.cellnumber === undefined || this.cellnumber === '') {
      this.invalidPrescreening++;
    }
    if (this.invalidPrescreening > 0) {
      console.log('invalid', this.invalidPrescreening);
      this.drive.showToaster('error', 'The form is not filled in or there is some missing values in it');
      this.invalidPrescreening = 0;
    } else {
      this.send = true;
      // this.drive.email = this.email;
      // this.drive.cellnumber = this.cellnumber;
      // this.answerResponse.email = this.email;
      // this.answerResponse.mobile = this.cellnumber;
      this.drive.sendPrescreeningAnswers(this.answerResponse)
        .subscribe((_response: OnlineRegistrationDTO) => {

          this.drive.CurrentUID = _response.id;
          // console.log('Current UID ', this.drive.CurrentUID);
          // this.drive.showToaster('info', 'Pre-Screening passed');
          this.router.navigate(['/u/new/form']);
        }, error => {
          console.log(error);
          this.drive.showToaster('warn', 'Something went wrong trying to save Data, try again, please');

        });
    }



  }



  ngOnInit() {
    this.getData();
  }

}
