import { Component, OnInit } from '@angular/core';
import { DriveRegistrationService } from './donor-app/services/drive-registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(
    public drive: DriveRegistrationService,
  ) {  }



  public bodyText: string;
  title = 'Sunflower Fund';
  hello = 'hello';

  getOption(option) {
    console.log(option);
  }
  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';
  }

  openModal(id: string) {
    this.drive.open(id);
  }

  closeModal(id: string) {
    this.drive.close(id);
  }
}
