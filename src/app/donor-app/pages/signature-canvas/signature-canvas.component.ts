import { Component, ViewChild, OnInit } from '@angular/core';

import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { DriveRegistrationService } from '../../services/drive-registration.service'; 
@Component({
  selector: 'app-signature-canvas',
  templateUrl: './signature-canvas.component.html',
  styleUrls: ['./signature-canvas.component.css']
})



export class SignatureCanvasComponent implements OnInit {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;


  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 375,
    'canvasHeight': 175,
    'backgroundColor': 'rgb(255,255,255)'
  };


  constructor(
    public drive: DriveRegistrationService,
    ) { }

  ngOnInit() {
  }


  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 2);

    this.signaturePad.clear();

  }

  drawComplete() {
    // this.drive.consented.signature = this.signaturePad.toDataURL();
     console.log(this.signaturePad.toDataURL());
       this.drive.consented.signature = this.signaturePad.toDataURL();
       console.log(this.drive.consented);
  }

  drawStart() {

    console.log('begin drawing');
  }

  clear() {
    this.signaturePad.clear();
  }
}
