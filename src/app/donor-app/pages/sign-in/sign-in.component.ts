import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sign-in-page',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user = {
    username: '',
    password: ''
  };
  constructor(private router: Router,
    private auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.router.navigate(['register']);
  }

  login() {
    this.auth.login(this.user).subscribe(_=>
      this.router.navigate(['admin/dash'])
    );
  }

}
