import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Product } from '../models/product';
import { take } from 'rxjs/operators/take';
import { ShoppingCart } from '../models/shopping-cart';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId)
    .valueChanges()
    .map((x: any) => new ShoppingCart(x.items));
  }

  private async getOrCreateCartId() {
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      return cartId;
    }

    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private getItem(cartId, productId) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  async updateItemQuantity(product: Product, change: number) {
    const cartId = await this.getOrCreateCartId();
    const itemRef$ = this.getItem(cartId, product.key);
    const item$ = itemRef$.valueChanges();

    item$.pipe(take(1)).subscribe((item: any) => {
      if (item) {
        itemRef$.update({
          quantity: item.quantity + change
        })
      } else {
        itemRef$.set({
          product: product, quantity: 1
        })
      }
    });
  }

  async addToCart(product: Product) {
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItemQuantity(product, -1);
  }
}
