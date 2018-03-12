import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TableDemoRoutingModule } from './table-demo-routing.module';
import { TableDemoComponent } from './table-demo.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    TableDemoRoutingModule
  ],
  declarations: [TableDemoComponent]
})
export class TableDemoModule { }
