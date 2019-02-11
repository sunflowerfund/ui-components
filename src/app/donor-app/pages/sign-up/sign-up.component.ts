import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SunflowerUser } from 'src/app/@sunflower-module/sunflower-ui/model/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'sign-up-page',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  sunflowerUser = {

    emailAddress: '',
    name: '',
    surname: '',
    password: '',
    confirmPassword: ''
  }

  user: SunflowerUser;
  temp;

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {    
  }

  getUsers(): void {
    this.auth.getSunflowerUseres()
    .subscribe(response => this.temp = response);
  }




  login() {
    this.router.navigate(['login']);
  }

  sign() {
    this.router.navigate(['dashboard']);
  }

  register(): void {
    // this.auth.addSunflowerUser(this.sunflowerUser);
    this.getUsers();
    console.log('from button', this.temp);
    
  }
}
