import { SignUpComponent } from './donor-app/pages/sign-up/sign-up.component';
import { SignInComponent } from './donor-app/pages/sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonComponent } from './@sunflower-module/sunflower-ui/ui-components/button/button.component';
import { DropdownMenuComponent } from './@sunflower-module/sunflower-ui/ui-components/dropdown-menu/dropdown-menu.component';
import { NavbarComponent } from './@sunflower-module/sunflower-ui/ui-components/navbar/navbar.component';
// import { SignInComponent } from './pages/sign-in/sign-in.component';
import { InputComponent } from './@sunflower-module/sunflower-ui/ui-components/input/input.component';

import { HomePage } from './donor-app/pages/home/home.page';

import { MainRoutingModule } from './donor-app/main.routing.module';
import { ComponentsPage } from './donor-app/pages/components.page';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { CircularIndicatorComponent } from './@sunflower-module/sunflower-ui/ui-components/circular-indicator/circular-indicator.component';
import { DashboardComponent } from './donor-app/pages/dashboard/dashboard.component';
import { DriveRegistrationComponent } from './donor-app/pages/drive-registration/drive-registration.component';
import { SunflowerPage } from './donor-app/pages/sunflower/sunflower.page';
// tslint:disable-next-line:max-line-length
// import { CircularIndicatorComponent } from './@sunflower-module/sunflower-ui/ui-components/circular-indicator/circular-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SignInComponent,
    SignUpComponent,
    InputComponent,
    DropdownMenuComponent,
    NavbarComponent,
    HomePage,
    SunflowerPage,
    DriveRegistrationComponent,
    ComponentsPage,
    CircularIndicatorComponent,
    DashboardComponent
  ],
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, MainRoutingModule, FormsModule, 
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
