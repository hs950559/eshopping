import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from './auth/auth.guard';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { AdminAuthGuard } from './auth/admin-auth.guard';
import { AccessDeniedComponent } from './components/access-denied.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
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
        path: 'order-success',
        component: OrderSuccessComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [ AuthGuard ]
      },
      {
        path: 'access-denied',
        component: AccessDeniedComponent
      }
      // {
      //   path: 'base',
      //   loadChildren: './views/base/base.module#BaseModule'
      // },
      // {
      //   path: 'buttons',
      //   loadChildren: './views/buttons/buttons.module#ButtonsModule'
      // },
      // {
      //   path: 'charts',
      //   loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      // },
      // {
      //   path: 'dashboard',
      //   loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      // },
      // {
      //   path: 'icons',
      //   loadChildren: './views/icons/icons.module#IconsModule'
      // },
      // {
      //   path: 'notifications',
      //   loadChildren: './views/notifications/notifications.module#NotificationsModule'
      // },
      // {
      //   path: 'theme',
      //   loadChildren: './views/theme/theme.module#ThemeModule'
      // },
      // {
      //   path: 'widgets',
      //   loadChildren: './views/widgets/widgets.module#WidgetsModule'
      // }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  },
  {
    path: 'auth',
    component: SimpleLayoutComponent,
    data: {
      title: 'Auth Section'
    },
    children: [
      {
        path: '',
        loadChildren: './auth/auth.module#AuthModule',
      }
    ]
  },
  // {
  //   path: 'admin',
  //   component: SimpleLayoutComponent,
  //   data: {
  //     title: 'Admin Section'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './admin/admin.module#AdminModule',
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
