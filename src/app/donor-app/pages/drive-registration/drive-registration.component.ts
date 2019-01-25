import { Component, OnInit } from '@angular/core';
import { MedicalScreening } from 'src/app/@sunflower-module/sunflower-ui/model/medicalScreening.model';

@Component({
  selector: 'app-drive-registration',
  templateUrl: './drive-registration.component.html',
  styleUrls: ['./drive-registration.component.css']
})


export class DriveRegistrationComponent implements OnInit {
  item1: boolean;
  // medic:MedicalScreening;

  constructor(
    // public medic: MedicalScreening
    ) {
    this.item1 = false;


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
  }

  setItem1(val ) {
    this.item1 =  val;
  }
}
