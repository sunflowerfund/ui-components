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


const routes: Route[] = [
  { path: '', component: HomePage },
  { path: 'login', component:  SignInComponent},
  { path: 'register', component: SignUpComponent },
  { path: 'components', component: ComponentsPage },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      //   ,
      //   { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class MainRoutingModule {}
