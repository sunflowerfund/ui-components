import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DriveRegistrationService } from '../../services/drive-registration.service';
import { AuthService } from '../../services/auth.service';
import { OnlineRegistrationDTO } from 'src/app/@sunflower-module/sunflower-ui/model/models';
import { ViewData } from 'src/app/@sunflower-module/sunflower-ui/model/viewData.model';

@Component({
  selector: 'app-staff-view',
  templateUrl: './staff-view.component.html',
  styleUrls: ['./staff-view.component.css',]
})
export class StaffViewComponent implements OnInit {
  currentUser;
  people: OnlineRegistrationDTO[];
  sorts = {
    CreatedDate: '',
    name: '',

  }

  response = {
    people: this.people,
    pageNumber: 0,
    totalPages: 0,
    isFirstPage: 0,
    isLastPage: 0,
    totalElements: 0,
    numberOfElements: 0
  };
  constructor(
    public router: Router,
    public auth: AuthService,
    private toastr: ToastrService,
  ) { }


  ngOnInit() {
    this.auth.getAllSunflowerUseres()
      .subscribe((res: any) => {

        this.response.people = res.content;
        this.response.totalPages = res.totalPages;
        this.response.isFirstPage = res.first;
        this.response.isLastPage = res.last;
        this.response.pageNumber = res.number + 1;
        this.response.totalElements = res.totalElements;
        this.response.numberOfElements = res.numberOfElements;
        // console.log('My object', this.response);
        // console.log(res);
      });
  }

  view(selectedUser) {
    this.auth.selectedUser = selectedUser;
    this.router.navigate(['admin/view']);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
    // console.log('log after service');
    
  }



  forward() {
    this.auth.NextUserList(this.response.pageNumber)
      .subscribe((res: any) => {

        this.response.people = res.content;
        this.response.totalPages = res.totalPages;
        this.response.isFirstPage = res.first;
        this.response.isLastPage = res.last;
        this.response.pageNumber = res.number + 1;
        this.response.totalElements = res.totalElements;
        this.response.numberOfElements = res.numberOfElements;
        console.log('Next Page', this.response);
        console.log(res);
      });

    console.log('next');

  }

  backwards() {
    this.auth.previouseUserList(this.response.pageNumber)
      .subscribe((res: any) => {

        this.response.people = res.content;
        this.response.totalPages = res.totalPages;
        this.response.isFirstPage = res.first;
        this.response.isLastPage = res.last;
        this.response.pageNumber = res.number;
        this.response.totalElements = res.totalElements;
        this.response.numberOfElements = res.numberOfElements;
        console.log('Next Page', this.response);
        console.log(res);
      });

    console.log('back');


  }
}
