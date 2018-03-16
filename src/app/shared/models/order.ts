import { ShoppingCart } from './shopping-cart';

export class Order {
  datePlaced: number;
  items: any[] = [];

  constructor(private userId: string, public shipping: any, shoppingCart: ShoppingCart) {
    this.datePlaced = new Date().getTime();
    const cartItems = shoppingCart.items;

    Object.keys(cartItems).forEach(key => {
      console.log(this.items)
      this.items.push({
          product: {
            title: cartItems[key].product.title,
            imageUrl: cartItems[key].product.imageUrl,
            price: cartItems[key].product.price
          },
          quantity: cartItems[key].quantity,
          totalPrice: cartItems[key].totalPrice || 0
        })
    });
    // this.items = shoppingCart.items.map(i => {
    //   return {
    //     product: {
    //       title: i.product.title,
    //       imageUrl: i.product.imageUrl,
    //       price: i.product.price
    //     },
    //     quantity: i.quantity,
    //     totalPrice: i.totalPrice
    //   }
    // });
  }
}
