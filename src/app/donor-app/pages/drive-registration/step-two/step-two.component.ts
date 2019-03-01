import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from '../../../services/drive-registration.service';



@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css', './../drive-registration.component.css']
})
export class StepTwoComponent implements OnInit {
  isAWomen = false;


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

  constructor(
    private drive: DriveRegistrationService,
  ) {   }


  ngOnInit() {
  }

  finish() {
    this.drive.showToaster('success', 'Well Done, All entered info is saved !!!' );
  }

}
