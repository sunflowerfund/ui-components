import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from './donor-app/services/drive-registration.service';
import { AuthService } from './donor-app/services/auth.service';
import { NotificationService } from './donor-app/services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notification: string;
  showNotification: boolean;

  public bodyText: string;
  title = 'The Sunflower Fund';
  hello = 'Hello';

  constructor(
    public drive: DriveRegistrationService,
    public auth: AuthService,
    private notificationService: NotificationService,

  ) { }




  getOption(option) {
    console.log(option);
  }


  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';


    // this.auth.open('app-modal');
    this.notificationService
      .notification$
      .subscribe(message => {
        this.notification = message;
        this.showNotification = true;
      });


  }

  // openModal(id: string) {
  //   this.drive.open(id);
  // }

  // closeModal(id: string) {
  //   this.drive.close(id);
  // }
}
