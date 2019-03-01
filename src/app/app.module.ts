import { SignUpComponent } from './donor-app/pages/sign-up/sign-up.component';
import { SignInComponent } from './donor-app/pages/sign-in/sign-in.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonComponent } from './@sunflower-module/sunflower-ui/ui-components/button/button.component';
import { DropdownMenuComponent } from './@sunflower-module/sunflower-ui/ui-components/dropdown-menu/dropdown-menu.component';
import { NavbarComponent } from './@sunflower-module/sunflower-ui/ui-components/navbar/navbar.component';

import { InputComponent } from './@sunflower-module/sunflower-ui/ui-components/input/input.component';

import { HomePage } from './donor-app/pages/home/home.page';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainRoutingModule } from './donor-app/main.routing.module';
import { ComponentsPage } from './donor-app/pages/components.page';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { CircularIndicatorComponent } from './@sunflower-module/sunflower-ui/ui-components/circular-indicator/circular-indicator.component';
import { DashboardComponent } from './donor-app/pages/dashboard/dashboard.component';
import { DriveRegistrationComponent } from './donor-app/pages/drive-registration/drive-registration.component';
import { SunflowerPage } from './donor-app/pages/sunflower/sunflower.page';
import { StepTwoComponent } from './donor-app/pages/drive-registration/step-two/step-two.component';
import { StepOneComponent } from './donor-app/pages/drive-registration/step-one/step-one.component';
import { AuthService } from './donor-app/services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from './donor-app/services/auth-guard.service';
import { NgDatePickerComponent } from './@sunflower-module/sunflower-ui/ui-components/ng-date-picker/ng-date-picker.component';
import { CommonModule  } from '@angular/common';
import { PrescreeningComponent } from './donor-app/pages/prescreening/prescreening.component';
import { ValidationService } from './donor-app/services/validation-.service';


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
    PrescreeningComponent,
    DashboardComponent,
    StepTwoComponent,
    StepOneComponent,
    NgDatePickerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MainRoutingModule,
    CommonModule,
    NgbModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [FormBuilder, ValidationService, AuthService, AuthGuardService],

  bootstrap: [AppComponent]
})
export class AppModule { }
