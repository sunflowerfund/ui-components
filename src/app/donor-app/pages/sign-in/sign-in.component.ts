import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DriveRegistrationService } from '../../services/drive-registration.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sign-in-page',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  bodyText;
  user = {
    username: '',
    password: ''
  };
  constructor(
    private router: Router,
    public drive: DriveRegistrationService,
    private auth: AuthService) { }

  ngOnInit() {
    this.bodyText = this.auth.bodyText;
  }

  register() {
    this.router.navigate(['register']);
  }

  login() {

    // this.drive.open('login-modal');
    this.auth.login(this.user).subscribe(_ =>
      this.router.navigate(['admin/dash']),
      error => {
        this.drive.open('login-modal');
    }
    );
  }


  openModal(id: string) {
    this.drive.open(id);
  }

  closeModal(id: string) {
    this.drive.close(id);
  }



}
