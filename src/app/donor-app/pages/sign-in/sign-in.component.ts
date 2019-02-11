import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user = {
    username:'',
    password:''
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  register(){
    this.router.navigate(['register'])
  }

  login(){
    this.router.navigate(['/u/new/form']);
  }

}
