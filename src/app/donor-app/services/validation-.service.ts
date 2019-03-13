import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  invalid = 0;
  messages = [];
  status: boolean;
  DOB;
  gender;
  constructor() { }

  identityValidation(identity) {

    this.messages.length = 0;

    if (isNaN(identity)) {
      this.messages.push('Value supplied is not a valid number');
      this.invalid++;
    }

    if (identity.length !== 13) {
      this.messages.push('Number supplied does not have 13 digits.');
      this.invalid++;
    }

    // tslint:disable-next-line:prefer-const
    let yy = identity.substring(0, 2),
    // tslint:disable-next-line:prefer-const
    mm = identity.substring(2, 4),
    // tslint:disable-next-line:prefer-const
    dd = identity.substring(4, 6);

    // tslint:disable-next-line:prefer-const
    this.DOB = new Date(yy, (mm - 1), dd);


    // check values - add one to month because Date() uses 0-11 for months
    if ((((this.DOB.getFullYear() + '').substring(2, 4) === yy) && (this.DOB.getMonth() === mm - 1) && (this.DOB.getDate() === dd))) {
      this.messages.push('Date in first 6 digits is invalid.');
      this.invalid++;
    }
    // evaluate GSSS group for gender and sequence
     this.gender = parseInt(identity.substring(6, 10), 10) > 5000 ? 'Male' : 'Female';

    // ensure third to last digit is a 1 or a 0
    if (identity.substring(10, 11) > 1) {
      this.messages.push('Third to last digit can only be a 0 or 1 but is a ' + identity.substring(10, 11) + '.');
      this.invalid++;
    } else {
      // determine citizenship from third to last digit (C)
      const saffer = parseInt(identity.substring(10, 11), 10) === 0 ? 'C' : 'F';
    }
    // ensure second to last digit is a 8 or a 9
    if (identity.substring(11, 12) < 8) {
      this.messages.push('Second to last digit can only be a 8 or 9 but is a ' + identity.substring(11, 12) + '.');
      this.invalid++;
    }

    // calculate check bit (Z) using the Luhn algorithm
    let ncheck = 0,
      beven = false;

    for (let c = identity.length - 1; c >= 0; c--) {
      // tslint:disable-next-line:prefer-const
      let cdigit = identity.charAt(c),
        ndigit = parseInt(cdigit, 10);

      if (beven) {
        if ((ndigit *= 2) > 9) { ndigit -= 9; }
      }

      ncheck += ndigit;
      beven = !beven;
    }

    if ((ncheck % 10) !== 0) {
      this.messages.push('Checkbit is incorrect.');
      this.invalid++;
    }

    // if one or more checks fail, display details
    if (this.invalid > 0) {
     this.status = false;
    } else {this.status = true; }

    return (ncheck % 10) === 0 ;
  }

}
