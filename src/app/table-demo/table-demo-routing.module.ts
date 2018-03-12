import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDemoComponent } from './table-demo.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Table Demo Page'
    },
    component: TableDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableDemoRoutingModule { }
