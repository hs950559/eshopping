import { NgModule } from '@angular/core';


import { PagesRoutingModule } from './pages-routing.module';

import { P404Component } from './p404/p404.component';
import { P500Component } from './p500/p500.component';

@NgModule({
  imports: [ PagesRoutingModule ],
  declarations: [
    P404Component,
    P500Component
  ]
})
export class PagesModule { }
