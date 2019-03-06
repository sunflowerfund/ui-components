import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from 'src/app/donor-app/services/drive-registration.service';
import { QuestionDTO } from 'src/app/@sunflower-module/sunflower-ui/model/questionDTO';
import { MedicalQuestions } from 'src/app/@sunflower-module/sunflower-ui/model/medicalQuestion.model';
// import {  } from 'src/app/@sunflower-module/sunflower-ui/model/';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css', './../drive-registration.component.css']
})
export class StepOneComponent implements OnInit {
  // name

  questionair;
  simpleMedic = [];
  prestine = [];
  userResponse = [];
  finalUserResponse = {};


  constructor(
    public drive: DriveRegistrationService) { }

  ngOnInit() {
    this.getHealthQuestionair();
  }


  getHealthQuestionair() {
    this.drive.getHealthScreenQuestion().subscribe(
      (response) => {
        this.questionair = response;
// console.log(this.questionair);

        for (let index = 0; index < this.questionair.length; index++) {
          if (this.questionair[index].question_Type === 1) {
            this.simpleMedic.push(this.questionair[index]);
          }
        }
        // console.log(this.simpleMedic);
      }, error => {
        console.log(error);
      }
    );
  }





  checkAnswering() {
    for (let index = 0; index < this.simpleMedic.length; index++) {
      this.finalUserResponse[this.simpleMedic[index].answer] = this.userResponse[index];
    }
    // console.log('sending this', this.finalUserResponse);
    
    this.drive.sendHealthScreenAnswers(this.finalUserResponse).subscribe(_response => {
      // console.log(_response);

    }, error => { console.log(error) })


  }

}
