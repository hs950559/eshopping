import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  orders$;
  constructor(private authService: AuthService, private orderService: OrderService) { }

  ngOnInit() {
    this.orders$ = this.authService.user$.map(u => {
      return this.orderService.getOrderByUser(u.uid).snapshotChanges();
    });
  }

}
