import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin Page'
    },
    children: [
      {
        path: 'products',
        component: AdminProductsComponent,
        data: {
          title: 'Admin Products'
        }
      },
      {
        path: 'orders',
        component: AdminOrdersComponent,
        data: {
          title: 'Admin Orders'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
