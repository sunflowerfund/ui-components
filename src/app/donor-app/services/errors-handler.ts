import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
@Injectable()
export class ErrorsHandler implements ErrorHandler {

  constructor(
    private injector: Injector,
    private router: Router
  ){}

  handleError(error: Error | HttpErrorResponse) {

    const notificationService = this.injector.get(NotificationService);

    if (error instanceof HttpErrorResponse) {
      // Server or connection error happened
      if (!navigator.onLine) {
        // Handle offline error
        return notificationService.notify('No Internet Connection');
      } else {
        // Handle Http Error (error.status === 403, 404...)
        return notificationService.notify(`${error.status} - ${error.message}`);
      }
   } else {
     // Handle Client Error (Angular Error, ReferenceError...)
     this.router.navigate(['/error'], { queryParams: {error: error} });
   }
    // Log the error anyway
    console.error('So it happens: ', error);

  }
}
