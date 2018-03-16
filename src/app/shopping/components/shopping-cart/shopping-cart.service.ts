import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Product } from '../../../shared/models/product';
import { take } from 'rxjs/operators/take';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartItem } from '../../../shared/models/shopping-cart-item';

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
    return this.db.object('/shopping-carts/' + cartId).snapshotChanges().map(action => {
      console.log(action);
        const key = action.key;
        const items = action.payload.val() ? action.payload.val().items : [];
        return new ShoppingCart(key, items);
    });
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
      console.log(item)
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

  // private async updateItem(product: Product, change: number) {
  //   const cartId = await this.getOrCreateCartId();
  //   const itemRef$ = this.getItem(cartId, product.key);
  //   const item$ = itemRef$.valueChanges();

  //   item$.pipe(take(1)).subscribe(item => {
  //     const quantity = (item.quantity || 0) + change;
  //     if (quantity === 0) {
  //       itemRef$.remove();
  //     } else {
  //       itemRef$.update({
  //         title: product.title,
  //         imageUrl: product.imageUrl,
  //         price: product.price,
  //         quantity: quantity
  //       });
  //     }
  //   });
  // }

  async addToCart(product: Product) {
    this.updateItemQuantity(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItemQuantity(product, -1);
  }

  clearCart() {
    console.log('Clear Cart (logic not implemented yet)');
  }
}
