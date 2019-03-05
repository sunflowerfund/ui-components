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

  questionair: QuestionDTO  [];
  medic: QuestionDTO  [];
  
  yesToAll = false;
  areYouHealthy;
  areYouHealthyPrestine = false;
  doesYourFamilyAgreeForyouToDonate = false;
  doesYourFamilyAgreeForyouToDonatePrestine = false;
  doesYourAnkleSwellEdnOfDay = false;
  doesYourAnkleSwellEdnOfDayPrestine = false;
  areYouAHighRiskForhepatitisOrHiv = true;
  areYouAHighRiskForhepatitisOrHivPrestine = false;
  whatsYourWeight = this.drive.weight;
  whatsYourHeight = this.drive.height;
  AreYouARegularBloodDonor = false;
  AreYouARegularBloodDonorPrestine = false;
  DoYouGetUpMorethanOnceAtNight = false;
  DoYouGetUpMorethanOnceAtNightPrestine = false;
  haveYouEverBeenTestedForHiv = false;
  haveYouEverBeenTestedForHivPrestine = false;
  AreYouOrYourPartnerRiskOfSTI = false;
  AreYouOrYourPartnerRiskOfSTIPrestine = false;
  areYouAPlateletDonor = false;
  areYouWillingToBeAproachedToBeAPlatelet = false;
  IConsentToMyPersonalInfoGiveToSANBS = false;
  IAgreeToBiengContactedBySANBSAndWPBTSToDonatePlatelet = false;
  HaveYouEverBeenPregnant = false;
  IfSoNumberOfPregnancies = false;
  dateOfLastPregnancy = false;

  constructor(
    public drive: DriveRegistrationService) { }

  ngOnInit() {
    this.getHealthQuestionair();
  }


  getHealthQuestionair(){
    this.drive.getHealthScreenQuestion().subscribe(
      (response) => {
        this.questionair = response;
        for (let index = 0; index < this.questionair.length; index++) {
          const element = this.questionair[index];
          if (this.questionair[index].questionType === 2) {
            this.medic[index] = this.questionair[index];             
          }          
        }
        console.log(this.medic);
      }, error =>{
        console.log(error);        
      }
    );
  }

// answering(num, answer, question) {

//   this.questions[num].questionNumber = num;
//   this.questions[num].answer = answer;
//   this.questions[num].question = question;


    // if (
    //   this.areYouHealthy === false ||
    //   this.doesYourFamilyAgreeForyouToDonate === false ||
    //   this.doesYourAnkleSwellEdnOfDay === false ||
    //   this.areYouAHighRiskForhepatitisOrHiv === false ||
    //   this.whatsYourWeight === 0 ||
    //   this.whatsYourHeight === 0 ||
    //   this.AreYouARegularBloodDonor === false ||
    //   this.DoYouGetUpMorethanOnceAtNight === false ||
    //   this.haveYouEverBeenTestedForHiv === false ||
    //   this.AreYouOrYourPartnerRiskOfSTI === false
    // ) {
    //   this.yesToAll = true;
    // }
  // }


  next() {
   this.drive.step += 1;
  //  console.log(this.questions);
  }

}
