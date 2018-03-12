import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operator/take';
@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  categoriesRef: AngularFireList<any>;
  categories: Observable<any[]>;
  product = {};
  subscription;
  id;

  constructor(private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router) {
    this.categoriesRef = categoryService.getCategories();
    this.categories = this.categoriesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).subscribe(p => this.product = p);
    }
  }

  ngOnInit() {

  }

  createUpdateProduct(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }

    this.router.navigate(['/admin/products']);
  }

  ngOnDestroy() {
    //
  }
}
