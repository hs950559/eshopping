import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators/map';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route, state: RouterStateSnapshot) {
    return this.authService.appUser$.map((user) => {
      if ( user ) {
        return true
      }

      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
      return false;
    });
  }
}
