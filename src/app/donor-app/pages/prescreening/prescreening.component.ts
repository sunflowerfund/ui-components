import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from '../../services/drive-registration.service';
import { PreScreeeningQuestion } from 'src/app/@sunflower-module/sunflower-ui/model/preScreeningQuestion.model';
import { PreScreeningAnswers } from 'src/app/@sunflower-module/sunflower-ui/model/preScreening.model';
import { templateData } from 'src/assets/template-data/date';

@Component({
  selector: 'app-prescreening',
  templateUrl: './prescreening.component.html',
  styleUrls: ['./prescreening.component.css']
})
export class PrescreeningComponent implements OnInit {

  demo = true;
  questions;
  // questions:PreScreeeningQuestion[];
  answers :PreScreeningAnswers[];

  constructor(
    public drive: DriveRegistrationService,
  ) { }

  getData() {
    this.drive.getPrescreeningQuestion().subscribe((response) => {
      this.questions = response;
      console.log(this.questions);
    }, error => {
      console.log(error);

    });
  }

  answeringOfQuestionair():void{
    this.drive
  }


  ngOnInit() {
    // this.getData();
    this.questions = templateData.Months;
  }

}
