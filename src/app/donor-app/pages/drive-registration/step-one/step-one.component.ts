import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from 'src/app/donor-app/services/drive-registration.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css', './../drive-registration.component.css']
})
export class StepOneComponent implements OnInit {
  name

  yesToAll = false;
  areYouHealthy;
  areYouHealthyPrestine = false;
  doesYourFamilyAgreeForyouToDonate = false;
  doesYourFamilyAgreeForyouToDonatePrestine = false;
  doesYourAnkleSwellEdnOfDay = false;
  doesYourAnkleSwellEdnOfDayPrestine = false;
  areYouAHighRiskForhepatitisOrHiv = true;
  areYouAHighRiskForhepatitisOrHivPrestine = false;
  whatsYourWeight;
  whatsYourHeight ;
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
    public driveReg: DriveRegistrationService) { }

  ngOnInit() {
    this.checkAnswering();
  }

  checkAnswering() {
    if (
      this.areYouHealthy === false ||
      this.doesYourFamilyAgreeForyouToDonate === false ||
      this.doesYourAnkleSwellEdnOfDay === false ||
      this.areYouAHighRiskForhepatitisOrHiv === false ||
      this.whatsYourWeight === 0 ||
      this.whatsYourHeight === 0 ||
      this.AreYouARegularBloodDonor === false ||
      this.DoYouGetUpMorethanOnceAtNight === false ||
      this.haveYouEverBeenTestedForHiv === false ||
      this.AreYouOrYourPartnerRiskOfSTI === false
    ) {
      this.yesToAll = true;
    }
  }

  next() {
   this.driveReg.step += 1;
  }

}
