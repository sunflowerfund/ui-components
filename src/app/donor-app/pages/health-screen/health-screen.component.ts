import { Component, OnInit } from '@angular/core';
import { healthScreenQuestion } from "src/app/@sunflower-module/sunflower-ui/model/healthScreenQuestion.model";
import { healthScreenAnswers } from 'src/app/@sunflower-module/sunflower-ui/model/healthScreen';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OnlineRegistrationDTO } from 'src/app/@sunflower-module/sunflower-ui/model/onlineRegistrationDTO';
import { DriveRegistrationService } from '../../services/drive-registration.service';

@Component({
  selector: 'app-health-screen',
  templateUrl: './health-screen.component.html',
  styleUrls: ['./health-screen.component.css']
})
export class HealthScreenComponent implements OnInit {
  invalidHealthScreen = 0;
  answerResponse = {
    q2_1:0,
    q2_1a:'',
    q2_1b:'',
    q2_2:0,
    q2_2a:'',
    q2_3:0,
    q2_3a:'',
    q2_4:0,
    q2_4a:'',
    q2_5:0,
    q2_5a:'',
    q2_6:0,
    q2_6a:'',
    q2_6b:'',
    q2_7:0,
    q2_7a:'',
    q2_8:0,
    q2_8a:'',
    q2_9:0,
    q2_9a:'',
    q2_10:0,
    q2_10a:'',
    q2_11:0,
    q2_11a:'',
    q2_12:0,
    q2_12a:'',
    q2_13:0,
    q2_13a:'',
    q2_14:0,
    q2_14a:'',
    q2_15:0,
    q2_15a:'',
    
  };

  prestine = [];
  answerElements =[];
  questions: healthScreenQuestion[];
  healthScreenAnswers: healthScreenAnswers[];

  constructor(
    public drive: DriveRegistrationService,
    public router: Router,
    private toastr: ToastrService,
  ) { }

  getHSData() {
    this.drive.getHealthScreenQuestion().subscribe((response) => {
      this.questions = response;
    }, error => {
      console.log(error);
    });
  }

  reply() {
    for (let index= 0; index < this.questions.length; index++) {
      this.answerElements[index] = this.questions[index].answer;
    }

    this.answerResponse.q2_1 = this.answerElements[0];
    this.answerResponse.q2_1a = this.answerElements[1];
    this.answerResponse.q2_1b = this.answerElements[2];
    this.answerResponse.q2_2 = this.answerElements[3];
    this.answerResponse.q2_2a = this.answerElements[4];
    this.answerResponse.q2_3 = this.answerElements[5];
    this.answerResponse.q2_3a = this.answerElements[6];
    this.answerResponse.q2_4 = this.answerElements[7];
    this.answerResponse.q2_4a = this.answerElements[8];
    this.answerResponse.q2_5 = this.answerElements[9];
    this.answerResponse.q2_5a = this.answerElements[10];
    this.answerResponse.q2_6 = this.answerElements[11];
    this.answerResponse.q2_6a = this.answerElements[12];
    this.answerResponse.q2_6b = this.answerElements[13];
    this.answerResponse.q2_7 = this.answerElements[14];
    this.answerResponse.q2_7a = this.answerElements[15];
    this.answerResponse.q2_8 = this.answerElements[16];
    this.answerResponse.q2_8a = this.answerElements[17];
    this.answerResponse.q2_9 = this.answerElements[18];
    this.answerResponse.q2_9a = this.answerElements[19];
    this.answerResponse.q2_10 = this.answerElements[20];
    this.answerResponse.q2_10a = this.answerElements[21];
    this.answerResponse.q2_11 = this.answerElements[22];
    this.answerResponse.q2_11a = this.answerElements[23];
    this.answerResponse.q2_12 = this.answerElements[24];
    this.answerResponse.q2_12a = this.answerElements[25];
    this.answerResponse.q2_13 = this.answerElements[26];
    this.answerResponse.q2_13a = this.answerElements[27];
    this.answerResponse.q2_14 = this.answerElements[28];
    this.answerResponse.q2_14a = this.answerElements[29];
    this.answerResponse.q2_15 = this.answerElements[30];
    this.answerResponse.q2_15a = this.answerElements[31];

    for(let index = 0; index < this.answerElements.length; index++){
      if (this.answerElements[index] === undefined || this.answerElements[index] === null) {
        this.invalidHealthScreen += index;
        console.log(this.invalidHealthScreen);
      }
    }
    if (this.invalidHealthScreen > 0){
      console.log('invalid', this.invalidHealthScreen);
      this.drive.showToaster('error', 'The form is not filled in or there is some missing values in it');
      this.invalidHealthScreen = 0;
    } else {
      this.drive.sendHealthScreenAnswers(this.answerResponse)
      .subscribe((_response: OnlineRegistrationDTO) =>{
        this.drive.CurrentUID = _response.id;
        this.drive.showToaster('success', 'Health Screen saved');
        this.router.navigate(['/u/new/form']);
      }, error => {
        this.drive.showToaster('warning', 'Something went wrong trying to save Data, try again, please');
      });
    }

  }
  ngOnInit() {
    this.getHSData();
  }

}
