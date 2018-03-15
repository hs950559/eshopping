import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../services/order.service';
import { AuthService } from '../auth/auth.service';
import { Order } from '../models/order';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  shipping = {};
  cartSubscription: Subscription;
  userSubscription: Subscription;
  userId: string
  cart: ShoppingCart;

  constructor(private cartService: ShoppingCartService, private orderService: OrderService, private authService: AuthService) { }

  async ngOnInit() {
    const cart$ = await this.cartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  placeOrder(val) {
    const order = new Order(this.userId, this.shipping, this.cart);
    this.orderService.storeOrder(order);
  }

  ngOnDestroy (){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
}
