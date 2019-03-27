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
  styleUrls: ['./staff-view.component.css',  ]
})
export class StaffViewComponent implements OnInit {
currentUser;
page = 4;
  people: OnlineRegistrationDTO[];
  constructor(
    public auth: AuthService,
    private toastr: ToastrService,
  ) { }


  ngOnInit() {
    this.auth.getAllSunflowerUseres().subscribe((res: ViewData[]) => {
      
      console.log(res);
      this.people = res.content;
      this.page = res.number;
      console.log(this.page);
      
    });
  }

  expression() {
    this.page++;
    console.log(this.page);
  }
}
