import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { AppUser } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  appUser: AppUser;

  constructor(private router: Router, public authService: AuthService) {
    authService.appUser$.subscribe(user => this.appUser = user);
  }

  logout() {
    this.authService.logout()
    .then(() => {
      this.router.navigate(['/auth/login']);
    });
  }
}
