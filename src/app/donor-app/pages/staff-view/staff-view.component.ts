import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DriveRegistrationService } from '../../services/drive-registration.service';
import { AuthService } from '../../services/auth.service';
import { OnlineRegistrationDTO } from 'src/app/@sunflower-module/sunflower-ui/model/models';

@Component({
  selector: 'app-staff-view',
  templateUrl: './staff-view.component.html',
  styleUrls: ['./staff-view.component.css']
})
export class StaffViewComponent implements OnInit {
currentUser;
  people: OnlineRegistrationDTO[];
  constructor(
    public auth: AuthService,
    private toastr: ToastrService,
  ) { }


  ngOnInit() {
    this.auth.getAllSunflowerUseres().subscribe((res: OnlineRegistrationDTO[]) => {
      this.people = res;
    });

    this.auth.getCurrentUser().subscribe((res) => {
      this.currentUser = res;
      console.log(res);
    });
    console.log(this.currentUser);

  }

}
