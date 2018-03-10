import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {
  constructor(public authService: AuthService) {

  }
  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
  logout() {
    this.authService.logout();
  }
}
