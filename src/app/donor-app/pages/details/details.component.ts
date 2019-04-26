import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user;
  constructor(
   public auth: AuthService
  ) { }

  ngOnInit() {
this.user = this.auth.selectedUser;
console.log(this.user);

  }

  generatePDF() {
    window.open(`https://sunflowerfund.azurewebsites.net/api/v1/o_registration/${this.user.id}/pdf`);
  }
}
