import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AuthGuard } from '../auth/auth.guard';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FullLayoutComponent } from '../containers';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Shopping Page'
    },
    component: FullLayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path: 'my-orders',
        component: MyOrdersComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'order-success/:id',
        component: OrderSuccessComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [ AuthGuard ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
