import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AuthGuard } from '../auth/auth.guard';
import { AdminAuthGuard } from './services/admin-auth.guard';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin Page'
    },
    children: [
      {
        path: '',
        redirectTo: 'products'
      },
      {
        path: 'products/new',
        component: ProductFormComponent,
        data: {
          title: 'Create Product'
        },
        canActivate: [ AuthGuard, AdminAuthGuard ]
      },
      {
        path: 'products/:id/edit',
        component: ProductFormComponent,
        data: {
          title: 'Edit Product'
        },
        canActivate: [ AuthGuard, AdminAuthGuard ]
      },
      {
        path: 'products',
        component: AdminProductsComponent,
        data: {
          title: 'Admin Products'
        },
        canActivate: [ AuthGuard, AdminAuthGuard ]
      },
      {
        path: 'orders',
        component: AdminOrdersComponent,
        data: {
          title: 'Admin Orders'
        },
        canActivate: [ AuthGuard, AdminAuthGuard ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
