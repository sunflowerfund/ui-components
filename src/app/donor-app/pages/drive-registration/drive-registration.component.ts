import { Component, OnInit } from '@angular/core';
// import { MedicalScreening } from 'src/app/@sunflower-module/sunflower-ui/model/medicalScreening.model';

@Component({
  selector: 'app-drive-registration',
  templateUrl: './drive-registration.component.html',
  styleUrls: ['./drive-registration.component.css']
})


export class DriveRegistrationComponent implements OnInit {
  yesToAll = false;
    areYouHealthy ;
    areYouHealthyPrestine = false ;
    doesYourFamilyAgreeForyouToDonate = false;
    doesYourFamilyAgreeForyouToDonatePrestine = false;
    doesYourAnkleSwellEdnOfDay = false;
    doesYourAnkleSwellEdnOfDayPrestine = false;
    areYouAHighRiskForhepatitisOrHiv = true;
    areYouAHighRiskForhepatitisOrHivPrestine = false;
    whatsYourWeight = '';
    whatsYourHeight = '';
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

  constructor( ) {
    // this.medic.areYouHealthy = true;
    // this.medic.doesYourFamilyAgreeForyouToDonate = '';
    // this.medic.doesYourAnkleSwellEdnOfDay = '';
    // this.medic.areYouAHighRiskForhepatitisOrHiv = '';
    // this.medic.whatsYourWeight = '';
    // this.medic.whatsYourHeight = '';
    // this.medic.AreYouARegularBloodDonor = '';
    // this.medic.DoYouGetUpMorethanOnceAtNight = '';
    // this.medic.haveYouEverBeenTestedForHiv = '';
    // this.medic.AreYouOrYourPartnerRiskOfSTI = '';
    // this.medic.areYouAPlateletDonor = '';
    // this.medic.areYouWillingToBeAproachedToBeAPlatelet = '';
    // this.medic.IConsentToMyPersonalInfoGiveToSANBS = '';
    // this.medic.IAgreeToBiengContactedBySANBSAndWPBTSToDonatePlatelet = '';
    // this.medic.HaveYouEverBeenPregnant = '';
    // this.medic.IfSoNumberOfPregnancies = '';
    // this.medic.dateOfLastPregnancy = '';
    // console.log(  'are you healthy ',  this.medic.areYouHealthy);
   }

  ngOnInit() {
    this.checkAnswering();
  }

  checkAnswering() {
    if (
      this.areYouHealthy === false ||
      this.doesYourFamilyAgreeForyouToDonate === false ||
      this.doesYourAnkleSwellEdnOfDay === false ||
      this.areYouAHighRiskForhepatitisOrHiv === false ||
      this.whatsYourWeight === '' ||
      this.whatsYourHeight === '' ||
      this.AreYouARegularBloodDonor === false ||
      this.DoYouGetUpMorethanOnceAtNight === false ||
      this.haveYouEverBeenTestedForHiv === false ||
      this.AreYouOrYourPartnerRiskOfSTI === false
    ) {
      this.yesToAll = true;
    }
  }

chill(){
   window.alert('wewrewertre')
}
}
