import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../admin/product.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import { switchMap } from 'rxjs/operators/switchMap';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
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
  category: string;
  cart$: Observable<ShoppingCart>;

  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: ShoppingCartService) {

  }

  applyFilter() {
    if (this.category) {
      this.filteredProducts = this.products.filter( p => p.category === this.category );
    } else {
      this.filteredProducts = this.products;
    }
  }

  populateProducts() {
    this.productsRef = this.productService.getAll();
    this.products$ = this.productsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    this.products$.switchMap((res) => {
      this.filteredProducts = this.products = res;
      return this.route.queryParamMap;
    }).subscribe(params => {
      this.category = params.get('category');

      this.applyFilter();
    });
  }

  async ngOnInit() {
    this.cart$ = await this.cartService.getCart();
    this.populateProducts();
  }
}
