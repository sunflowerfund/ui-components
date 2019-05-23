import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DriveRegistrationService } from '../../services/drive-registration.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sign-in-page',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  bodyText = ' Error while trying to log in \n \n check you credentials and try again if problem persist check your connection';
  
  user = {
    username: '',
    password: ''
  };
  logging = false;
  failed = false;
  empty = false;
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public drive: DriveRegistrationService,
    private auth: AuthService) { }

  ngOnInit() {
    // reseting user status
    this.auth.logout();
// redirecting to where the user wanted  to go prior logging in or to the home page 
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  register() {
    this.router.navigate(['register']);
  }

  login() {
   
    if (this.user.password === '' || this.user.password === null || this.user.username === '' || this.user.username === null) {
      this.empty= true;
    }else {
      this.empty = false;
       this.logging = !this.logging;
    this.failed = false;
  this.auth.login(this.user).subscribe( _res =>
      // console.log(this.returnUrl)
      
      this.router.navigate([this.returnUrl])
      
      ,
      error => {
        this.logging = !this.logging;
        this.failed = true;
        // this.drive.open('login-modal');
    }
    );

    } 
  
  }

  

  openModal(id: string) {
    this.drive.open(id);
  }

  closeModal(id: string) {
    this.drive.close(id);
  }



}
