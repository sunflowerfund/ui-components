import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from 'src/app/donor-app/services/drive-registration.service';
import { Answer } from 'src/app/@sunflower-module/sunflower-ui/model/answer';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css', './../drive-registration.component.css']
})
export class StepOneComponent implements OnInit {
  // name
  questionair;
  simpleMedic = [];
  simpleMedicAnswers: Answer[] = [];
  simpleAnswerText: string;
  prestine = [];
  // userResponse = [];
  // finalUserResponse = {};
  // medicalAnswers: MedicalQuestions[];
  // import {  } from 'src/app/@sunflower-module/sunflower-ui/model/';

  constructor(public drive: DriveRegistrationService) { }

  ngOnInit() {
    this.getHealthQuestionair();
  }


  getHealthQuestionair() {
    this.drive.getHealthScreenQuestion().subscribe(
      (_response) => {
        this.questionair = _response;
        this.drive.questionar = _response;
        // console.log(this.questionair);

        for (let index = 0; index < this.questionair.length; index++) {
          if (this.questionair[index].question_Type === 1) {
            this.simpleMedic.push(this.questionair[index]);
          }
        }
        console.log(this.simpleMedic);
      }, error => {
        console.log(error);
      }
    );
  }

  answerQuestion(questionId: number, yesno: boolean) {
    // console.log('Called at qID ' + questionId + ' boolean: ' + yesno);
    // find if answered
    let AlreadyAnswered = false;
    for (const oldAnswer of this.simpleMedicAnswers) {
      if (oldAnswer.questionId === questionId) {
        oldAnswer.yesno = yesno;
        AlreadyAnswered = true;
        break;
      }
    }

    if (!AlreadyAnswered) {
      const answer = new Answer();
      answer.yesno = yesno;
      answer.questionId = questionId;
      this.simpleMedicAnswers.push(answer);
    }
  }



  checkAnswering() {
    for (const medicaQuestion of this.simpleMedic) {
      if (medicaQuestion['answer'] === 'q1_12b') {
        const answer = new Answer();
        answer.yesno = false;
        answer.questionId = medicaQuestion['id'];
        this.simpleMedicAnswers.push(answer);
        break;
      }
    }
    console.log(this.simpleMedicAnswers);

    this.drive.answerHealthScreenAnswers(this.simpleMedicAnswers).subscribe(_response => {
      console.log(_response);
    }, error => { console.log(error) });

    this.drive.step++;


  }

}
