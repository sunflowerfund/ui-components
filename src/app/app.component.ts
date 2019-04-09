import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from './donor-app/services/drive-registration.service';
import { AuthService } from './donor-app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(
    public drive: DriveRegistrationService,
    public auth: AuthService,

  ) {  }



  public bodyText: string;
  title = 'Sunflower Fund';
  hello = 'Hello';

  getOption(option) {
    console.log(option);
  }


  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
    // this.auth.open('app-modal');
  }

  openModal(id: string) {
    this.drive.open(id);
  }

  closeModal(id: string) {
    this.drive.close(id);
  }
}
