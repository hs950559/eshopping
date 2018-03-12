import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  categoriesRef: AngularFireList<any>;
  categories$: Observable<any[]>;
  @Input('category') category;

  constructor( private categoryService: CategoryService ) {
    this.categoriesRef = categoryService.getCategories();
    this.categories$ = this.categoriesRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ngOnInit() {
  }

}
