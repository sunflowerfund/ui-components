export class SunflowerUser {
    id;
    twoFactorAuth;
    emailAddress;
    password;
    cellnumber;
    name;
    emailVerified;
    surname;
    gender;
    identityNumber;
    ethnicity;
    postalAddress;
    homeTelephone;
    confirmPassword
    nextOfKin: Kin[];


}

class Kin {
    fullName;
    relationship;
    emailAddress;
    cellNumber;
}