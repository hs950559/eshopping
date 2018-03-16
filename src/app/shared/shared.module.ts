import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card.component';
import { ProductQuantityComponent } from '../shopping/components/products/product-quantity/product-quantity.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ ProductCardComponent, ProductQuantityComponent ],
  exports: [ CommonModule, FormsModule, ProductCardComponent, ProductQuantityComponent ]
})
export class SharedModule { }
