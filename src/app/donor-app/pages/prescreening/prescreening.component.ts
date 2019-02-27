import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from '../../services/drive-registration.service';
import { PreScreeeningQuestion } from 'src/app/@sunflower-module/sunflower-ui/model/preScreeningQuestion.model';
import { PreScreeningAnswers } from 'src/app/@sunflower-module/sunflower-ui/model/preScreening.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-prescreening',
  templateUrl: './prescreening.component.html',
  styleUrls: ['./prescreening.component.css']
})
export class PrescreeningComponent implements OnInit {
  cellnumber;
  email;

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
    // bmi: 0,
  };

  prestine = [];
  answerElements = [];
  selectedAnswer = [];
  questions: PreScreeeningQuestion[];
  preScreeningAnswers: PreScreeningAnswers[];

  constructor(
    public drive: DriveRegistrationService,
    public router: Router,
  ) { }

  getData() {
    this.drive.getPrescreeningQuestion().subscribe((response) => {
      this.questions = response;
      // console.log(this.questions);
    }, error => {
      console.log(error);

    });
  }


  reply() {
    this.drive.email = this.email;
    this.drive.cellnumber = this.cellnumber;

    for (let index = 0; index < this.questions.length; index++) {
      this.answerElements[index] = this.questions[index].answer;
    }
    this.drive.weight = this.answerElements[3];
    this.drive.height = this.answerElements[2];

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
    this.drive.bmi =  this.answerElements[3] / Math.pow(this.answerElements[4], 2);
    // this.answerResponse.bmi =  Number.parseFloat(this.BMI.toFixed(2));
// console.log('BMI ', this.BMI);
// console.log('After Cal ', this.answerResponse.bmi);

// console.log(this.answerResponse);

    this.drive.sendPrescreeningAnswers(this.answerResponse)
    .subscribe(() => {
this.router.navigate(['/u/new/form']);
    }, error => {
      console.log(error);

    });

  }



  ngOnInit() {
    this.getData();
  }

}
