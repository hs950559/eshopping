import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminAuthGuard } from '../auth/admin-auth.guard';
import { AuthGuard } from '../auth/auth.guard';
import { CategoryService } from '../services/category.service';
import { ProductService } from './product.service';
import { CustomFormsModule } from 'ng2-validation'
import { ProductFormComponent } from './product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  providers: [
    AuthGuard,
    AdminAuthGuard,
    CategoryService,
    ProductService
  ]
})
export class AdminModule { }
