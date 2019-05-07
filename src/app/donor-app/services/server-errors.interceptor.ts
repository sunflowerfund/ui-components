import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class ServerErrorsInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  // inte rcept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // If the call fails, retry until 5 times before throwing an error
    // return next.handle(request).pipe(retry(2));
  // }


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(2),
      catchError(err => {
        if (err.status === 401) {
            // auto logout if 401 response returned from api
            this.authService.logout();
            location.reload(true);
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
    }))
}


}
