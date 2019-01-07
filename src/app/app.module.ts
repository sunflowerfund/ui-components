import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ButtonComponent } from './@sunflower-module/sunflower-ui/ui-components/button/button.component';
import { DropdownMenuComponent } from './@sunflower-module/sunflower-ui/ui-components/dropdown-menu/dropdown-menu.component';
import { NavbarComponent } from './@sunflower-module/sunflower-ui/ui-components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DropdownMenuComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
