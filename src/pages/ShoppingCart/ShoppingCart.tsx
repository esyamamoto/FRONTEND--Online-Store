import { useState, useEffect } from 'react';
import { InputProducts } from '../../services/types';
import '../../styles/ShoppingCart.css';

function ShoppingCart() {
  const [cart, setCart] = useState<InputProducts[]>([]);

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      const addItem = JSON.parse(localStorage.getItem('cart') as string);
      setCart(addItem);
    }
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 0 }; // Ensure quantity is not negative
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="shopping-cart-container">
      {cart.length === 0
        ? (<h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>)
        : cart.map((cartItem: InputProducts) => (
          <div key={ cartItem.id } className="cart-item">
            <img src={ cartItem.thumbnail } alt={ cartItem.title } />
            <p data-testid="shopping-cart-product-name">{ cartItem.title }</p>
            <p>{`R$${cartItem.price}`}</p>
            <div className="quantity-controls">
              <button
                onClick={ () => updateQuantity(cartItem.id, -1) }
                data-testid="decrease-quantity-button"
                className="quantity-button"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{cartItem.quantity}</p>
              <button
                onClick={ () => updateQuantity(cartItem.id, 1) }
                data-testid="increase-quantity-button"
                className="quantity-button"
              >
                +
              </button>
            </div>
            <button
              onClick={ () => removeFromCart(cartItem.id) }
              data-testid="remove-from-cart-button"
              className="remove-button"
            >
              Remover
            </button>
          </div>
        ))}
    </div>
  );
}

export default ShoppingCart;
