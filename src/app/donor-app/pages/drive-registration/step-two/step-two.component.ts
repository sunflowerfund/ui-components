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
  simpleMedicAnswers: Answer[] = []
  simpleAnswerText: string
  prestine = [];

  
  constructor(
    private drive: DriveRegistrationService,
  ) {   }


  ngOnInit() {
  this.questionair = this.drive.questionar;
  }

  finish() {
    this.drive.showToaster('info', 'Well Done, All entered info is saved !!!' );
  }

}
