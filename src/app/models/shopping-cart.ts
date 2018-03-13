import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart {
  items: ShoppingCartItem[] = [];

  constructor(public itemsMap: {
    [productId: string]: ShoppingCartItem
  }) {
    for (const productId in this.itemsMap) {
      if (this.itemsMap.hasOwnProperty(productId)) {
        const item = itemsMap[productId];
        this.items.push(new ShoppingCartItem(item.product, item.quantity));
      }
    }
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
    for (const productId in this.itemsMap) {
      if (this.itemsMap.hasOwnProperty(productId)) {
        count += this.itemsMap[productId].quantity;
      }
    }

    return count;
  }

  getQuantity(product: Product) {
    const item: any = this.itemsMap[product.key].quantity;
    return item || 0;
  }
}
