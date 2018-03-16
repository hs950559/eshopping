import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ShoppingCart } from '../../../../shared/models/shopping-cart';
import { Order } from '../../../../shared/models/order';
import { OrderService } from '../../../../services/order.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.scss']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userId: string
  userSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router, private orderService: OrderService) { }

  async ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  async placeOrder(val) {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

  ngOnDestroy () {
    this.userSubscription.unsubscribe();
  }
}
