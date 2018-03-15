import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../services/order.service';
import { AuthService } from '../auth/auth.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Router } from '@angular/router';
import { Observable } from '@firebase/util';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cart$;

  constructor(
    private cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
  }
}
