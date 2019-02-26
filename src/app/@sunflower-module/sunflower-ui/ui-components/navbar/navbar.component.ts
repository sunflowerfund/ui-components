import { Component, Input, HostListener, OnInit } from "@angular/core";
import { Path } from "../../model/path.model";
@Component({
  selector: "sunflower-navbar",
  template: `
    <div class="navbar" [class.active]="isNavbarActive">
      <div class="navbar-brand" routerLink="/">
        <img
          src="./assets/img/sunflower/sunflower-fund-sunflower.png"
          class="brand-img"
          alt=""
        />
      </div>
      <div class="navbar-brand-name"  routerLink="/">Sunflower Fund</div>
      <div class="navbar-container">
        <a *ngFor="let path of paths" class="navbar-item fa" [ngClass]="path.icon">{{ path.name }}</a>
        <ng-content></ng-content>
      </div>
    </div>

    <!--
    This is code that renders the code for a button.
    How it works:

      <sunflower-navbar [paths]="pathsArray">Button</sunflower-button>

    The * paths * attribute is to pass an array links/paths described on the 
    router module.

    The * paths * attribute is an array that references the @sunflower-module models.

    Note: Navigate to: @sunflower-module/sunflower-ui/model to see Path Reference
    discription.
 -->
  `
})
export class NavbarComponent implements OnInit {
  @Input()
    paths:Path[];
    isNavbarActive:boolean;

  constructor() {}
  @HostListener('window:scroll', ['$event'])
  adjust(evt) {
    this.isNavbarActive = evt.path[1].scrollY > 5 ;
  }
  ngOnInit() {}
}
