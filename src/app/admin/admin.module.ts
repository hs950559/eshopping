import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminAuthGuard } from './services/admin-auth.guard';
import { AuthGuard } from '../auth/auth.guard';
import { CategoryService } from '../services/category.service';
import { ProductService } from './product.service';
import { CustomFormsModule } from 'ng2-validation'
import { ProductFormComponent } from './components/product-form/product-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
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
