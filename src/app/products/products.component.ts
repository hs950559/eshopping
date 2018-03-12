import { Component, OnInit } from '@angular/core';
import { ProductService } from '../admin/product.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productsRef: AngularFireList<any>;
  products$: Observable<any[]>;
  products: Product[];
  filteredProducts: any[];
  categoriesRef: AngularFireList<any>;
  categories$: Observable<any[]>;
  category: string;

  constructor(private route: ActivatedRoute, private productService: ProductService, private categoryService: CategoryService) {
    this.productsRef = productService.getAll();
    this.products$ = this.productsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    this.products$.subscribe((res) => {
      this.filteredProducts = this.products = res;

      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');

        if (this.category) {
          this.filteredProducts = this.products.filter( p => p.category === this.category );
        } else {
          this.filteredProducts = this.products;
        }
      });

    });

    this.categoriesRef = categoryService.getCategories();
    this.categories$ = this.categoriesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ngOnInit() {
  }

}
