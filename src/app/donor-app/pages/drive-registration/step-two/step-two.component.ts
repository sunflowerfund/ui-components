import { Component, OnInit } from '@angular/core';
import { templateData } from "../../../../../assets/template-data/date";

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css', './../drive-registration.component.css']
})
export class StepTwoComponent implements OnInit {
  isAWomen = false;
Days;
Months;
Years;

  numberOfPregnancy;
  dateOfLastPregnancy;
  haveYouEverbeenPregnant;
  haveYouEverbeenPregnantPrestine;
  iAgreeTobeContactedBySANBSandWPBTS;
  iAgreeTobeContactedBySANBSandWPBTSPrestine;
  iConsentToMyPersonalInformationBeingGivenSANBS;
  iConsentToMyPersonalInformationBeingGivenSANBSPrestine;
  areYouWillingToBeApproachedToBeAPlateletDonor;
  areYouWillingToBeApproachedToBeAPlateletDonorPrestine;
  areYouAPlateletDonor;
  areYouAPlateletDonorPrestine;

  constructor() {
    this.Days = templateData.Days;
    this.Months = templateData.Months;
    this.Years = templateData.Years;
  }

  ngOnInit() {
  }

  finish() {
    window.alert('Well Done, All entered info is saved !!!');
  }

}
