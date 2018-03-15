import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
  constructor(public key: string, public items: ShoppingCartItem[]) {
  }

  // constructor(private itemsMap: {
  //   [productId: string]: ShoppingCartItem
  // }) {
  //   console.log(itemsMap);

  //   for (const productId in this.itemsMap) {
  //     if (this.itemsMap.hasOwnProperty(productId)) {
  //       const item = itemsMap[productId];
  //       console.log(item);
  //       this.items.push(new ShoppingCartItem(item.product, item.quantity));
  //     }
  //   }
  // }

  get productIds() {
    return Object.keys(this.items);
  }

  get totalPrice() {
    let sum = 0;
    for (const productId in this.items) {
      if (this.items.hasOwnProperty(productId)) {
        sum += this.items[productId].totalPrice;
      }
    }

    return sum;
  }

  get totalItemsCount() {
    let count = 0;
    for (const productId in this.items) {
      if (this.items.hasOwnProperty(productId)) {
        count += this.items[productId].quantity;
      }
    }

    return count;
  }

  getQuantity(product: Product) {
    const item = this.items[product.key];

    // console.log(this.itemsMap);
    // console.log(product);
    // console.log(item);
    return item ? item.quantity : 0;
  }
}
