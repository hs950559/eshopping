import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators/map';

@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.appUser$
    .map(appUser => {
      if (!appUser.isAdmin){
        this.router.navigate(['/access-denied']);
      }
      return appUser.isAdmin;
    });
  }
}
