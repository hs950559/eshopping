import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'environments/environment';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ProductService } from './admin/product.service';
import { AdminAuthGuard } from './admin/services/admin-auth.guard';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import {
  APP_SIDEBAR_NAV,
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
} from './components';
import { AccessDeniedComponent } from './components/access-denied.component';
import { FullLayoutComponent, SimpleLayoutComponent } from './containers';
import { AsideToggleDirective, NAV_DROPDOWN_DIRECTIVES, ReplaceDirective, SIDEBAR_TOGGLE_DIRECTIVES } from './directives';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { UserService } from './services/user.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingCartService } from './shopping/components/shopping-cart/shopping-cart.service';
import { ShoppingModule } from './shopping/shopping.module';

// Import containers
const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
]

// Import directives
const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
// Import 3rd party components
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule,
    ShoppingModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    AccessDeniedComponent
  ],
  providers: [
    AuthService,
    UserService,
    ProductService,
    CategoryService,
    AuthGuard,
    AdminAuthGuard,
    ShoppingCartService,
    OrderService,
  {
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
