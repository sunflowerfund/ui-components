import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
 


// import { ErrorsComponent } from './errors-component/errors.component';

import { ServerErrorsInterceptor } from '../services/server-errors.interceptor';
import { ErrorsHandler } from '../services/errors-handler';
import { ErrorRoutingModule } from './errors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ErrorRoutingModule,
  ],
  declarations: [
    // ErrorsComponent
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorsInterceptor,
      multi: true
    },
  ]
})
export class ErrorsModule { }
