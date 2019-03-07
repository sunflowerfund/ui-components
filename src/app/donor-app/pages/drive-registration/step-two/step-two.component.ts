import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from '../../../services/drive-registration.service';
import { Answer } from 'src/app/@sunflower-module/sunflower-ui/model/answer';



@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css', './../drive-registration.component.css']
})
export class StepTwoComponent implements OnInit {
  isAWomen = false;

  questionair;
  simpleMedic = [];
  simpleMedicAnswers: Answer[] = [];
  simpleAnswerText: string;
  prestine = [];
  simpleMedicAnswersMap: Map<number, Answer>;


  constructor(
    private drive: DriveRegistrationService,
  ) { }


  ngOnInit() {
    this.questionair = this.drive.questionar;
    this.simpleMedicAnswersMap = new Map();
    for (let index = 0; index < this.questionair.length; index++) {
      if (this.questionair[index].question_Type === 2) {
        this.simpleMedic.push(this.questionair[index]);
        this.simpleMedicAnswersMap.set(this.questionair[index].questionId, new Answer());
      }
    }
    // console.log(this.simpleMedic);

  }

  answerQuestion(questionId: number, yesno: boolean) {
    const oldAnswer = this.simpleMedicAnswersMap.get(questionId);
    oldAnswer.yesno = yesno;
  }


  finish() {
    console.log(this.simpleMedicAnswersMap);

    this.drive.showToaster('info', 'Well Done, All entered info is saved !!!');
    // console.log(this.simpleMedicAnswers);

  }

}
