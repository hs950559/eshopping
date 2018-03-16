import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  productsRef: AngularFireList<any>;
  products$: Observable<any[]>;
  products: Product[];
  filteredProducts: any[];

  constructor(private productService: ProductService) {
    this.productsRef = productService.getAll();
    this.products$ = this.productsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    this.products$.subscribe((res) => {
      this.filteredProducts = this.products = res;
    });
  }

  ngOnInit() {
  }

  removeProduct(productId) {
    if (confirm('Are you sure?')) {
      this.productService.remove(productId);
    }
  }

  filterProducts (query: string){
    if (query) {
      this.filteredProducts = this.products.filter( p => p.title.toLowerCase().includes(query.toLowerCase()));
    } else {
      this.filteredProducts = this.products;
    }
  }

}
