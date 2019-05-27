import { Injectable } from '@angular/core';

import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.currentUserValue;
    if (currentUser) {
        // logged in so return true
        return true;
    }
    // console.log('Guard Activated Url: ' + state.url);
    // console.log('Route is this one : ' + route);
    // not logged in so redirect to login page with the return url
    this.router.navigate(['/u'], { queryParams: { returnUrl: state.url } });
    return false;
}

}
