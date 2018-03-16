import { NgModule } from '@angular/core';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'shared/shared.module';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart/shopping-cart-summary/shopping-cart-summary.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ShippingFormComponent } from './components/checkout/shipping-form/shipping-form.component';

@NgModule({
  imports: [
    ShoppingRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ]
})
export class ShoppingModule { }
