import { useEffect, useState } from 'react';
import { InputProducts } from '../../services/types';
// import { Link } from 'react-router-dom';
// import CategoriesList from '../../components/CategoriesList/CategoriesList';

function ShoppingCart() {
  const [cart, setCart] = useState<InputProducts[]>([]);

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      const addItem = JSON.parse(localStorage.getItem('cart') as string);
      setCart(addItem);
    }
  }, []);

  return (
    <div>
      <div>
        {cart.length === 0
          ? (<h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>)
          : cart.map((cartItem: InputProducts) => (
            <div key={ cartItem.id }>
              <img src={ cartItem.thumbnail } alt={ cartItem.title } />
              <p data-testid="shopping-cart-product-name">{ cartItem.title}</p>
              <p>{cartItem.price}</p>
              <p data-testid="shopping-cart-product-quantity">{cartItem.quantity}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
export default ShoppingCart;
