/*
 * Sunflower Fund Organisation
 * License(s): Apache 2.0
 * Website: https://www.sunflowerfundregistry.com/
 * Github: https://github.com/sunflowerfund
 * Description: This is a file consisting of the Main Routing
 * Module that will monitor how you navigate through the app/site
 */

import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ComponentsPage } from './pages/components.page';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DriveRegistrationComponent } from './pages/drive-registration/drive-registration.component';
import { SunflowerPage } from './pages/sunflower/sunflower.page';
import { PrescreeningComponent } from './pages/prescreening/prescreening.component';
import { StaffViewComponent } from './pages/staff-view/staff-view.component';
import { SignatureCanvasComponent } from './pages/signature-canvas/signature-canvas.component';

const routes: Route[] = [
  {
    path: '',
    component: SunflowerPage,
    children: [
      { path: '', component: HomePage },
      { path: 'u', component: SignInComponent },
      { path: 'u/new', component: SignUpComponent },
      { path: '', redirectTo: '/', pathMatch: 'full' }
    ]
  },
  { path: 'u/new/form', component: DashboardComponent },
  { path: 'admin/dash', component: StaffViewComponent },
  { path: 'medic', component: DriveRegistrationComponent },
  { path: 'components', component: ComponentsPage },
  { path: 'get-started', component: PrescreeningComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [] 
})
export class MainRoutingModule {}
