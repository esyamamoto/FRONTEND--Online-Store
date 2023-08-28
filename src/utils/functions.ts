import { CartProducts } from '../services/types';

const addToCart = (product: CartProducts) => {
  if (localStorage.getItem('cart')) {
    const getCart = JSON.parse(localStorage.getItem('cart') as string);
    if (getCart.some((cartItem: CartProducts) => cartItem.id === product.id)) {
      const removedCartProduct = getCart
        .find((cartItem: CartProducts) => cartItem.id === product.id);
      const cartProduct = getCart
        .filter((cartItem: CartProducts) => cartItem.id !== product.id);
      removedCartProduct.quantity++;
      cartProduct.push(removedCartProduct);
      localStorage.setItem('cart', JSON.stringify([...getCart, cartProduct]));
    } else {
      localStorage.setItem('cart', JSON.stringify([...getCart, product]));
    }
  } else {
    localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1,
    }]));
  }
};
export default addToCart;
