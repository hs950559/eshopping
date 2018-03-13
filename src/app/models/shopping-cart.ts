import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: {
    [productId: string]: ShoppingCartItem
  }) {
    for (const productId in this.itemsMap) {
      if (this.itemsMap.hasOwnProperty(productId)) {
        console.log(this);
        this.items.push(itemsMap[productId]);
      }
    }
  }

  get totalitemsMapCount() {
    let count = 0;
    for (const productId in this.itemsMap) {
      if (this.itemsMap.hasOwnProperty(productId)) {
        count += this.itemsMap[productId].quantity;
      }
    }

    return count;
  }
}
