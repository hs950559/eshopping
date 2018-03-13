import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { AppUser } from '../../models/user';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { Observable } from 'rxjs/Observable';
import { ShoppingCart } from '../../models/shopping-cart';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(private router: Router, public authService: AuthService, private cartService: ShoppingCartService) {
  }

  logout() {
    this.authService.logout()
    .then(() => {
      this.router.navigate(['/auth/login']);
    });
  }

  async ngOnInit() {
    this.authService.appUser$.subscribe(user => this.appUser = user);

    this.cart$ = (await this.cartService.getCart());
  }
}
