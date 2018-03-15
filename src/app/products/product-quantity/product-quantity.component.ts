import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { ShoppingCart } from '../../models/shopping-cart';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') product: Product;
  @Input('shoppingCart') shoppingCart: ShoppingCart;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
    // console.log(this.product)
    // console.log(this.shoppingCart.getQuantity(this.product));
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product);
  }
}
