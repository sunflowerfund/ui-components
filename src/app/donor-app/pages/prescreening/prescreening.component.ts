import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from '../../services/drive-registration.service';
import { PreScreeeningQuestion } from 'src/app/@sunflower-module/sunflower-ui/model/preScreeningQuestion.model';
import { PreScreeningAnswers } from 'src/app/@sunflower-module/sunflower-ui/model/preScreening.model';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-prescreening',
  templateUrl: './prescreening.component.html',
  styleUrls: ['./prescreening.component.css']
})
export class PrescreeningComponent implements OnInit {

  prestine = [];
  answerElements = [];
  selectedAnswer = [];
  questions: PreScreeeningQuestion[];
  preScreeningAnswers: PreScreeningAnswers[];

  constructor(
    public drive: DriveRegistrationService,
  ) { }

  getData() {
    this.drive.getPrescreeningQuestion().subscribe((response) => {
      this.questions = response;
      // console.log(this.questions);
    }, error => {
      console.log(error);

    });
  }

  answeringOfQuestionair(): void {
    // this.drive
  }
  reply() {
    for (let index = 0; index < this.questions.length; index++) {
      this.answerElements[index] = this.questions[index].answer;
    }
    this.drive.sendPrescreeningAnswers(this.answerElements).subscribe(() => {

    }, error => {
      console.log(error);

    });
  }

  ngOnInit() {
    this.getData();
  }

}
