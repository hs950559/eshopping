import { Product } from './product';

export class ShoppingCartItem {
  constructor(public product: Product, public quantity: number = 0) {}

  get totalPrice() {
    return this.product.price * this.quantity;
  }
}
