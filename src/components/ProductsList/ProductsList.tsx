import { useNavigate } from 'react-router-dom';
import { InputProducts, CartProducts } from '../../services/types';
import addToCart from '../../utils/functions';
// import { AddToCart } from '../../services/localStorage';
// import { stringify } from '@vitest/utils';

type ListProductProp = {
  listProducts: InputProducts
};
function ProductList({ listProducts }: ListProductProp) {
  const { id, title, thumbnail, price } = listProducts;

  // const addToCart = (product: CartProducts) => {
  //   if (localStorage.getItem('cart')) {
  //     const getCart = JSON.parse(localStorage.getItem('cart') as string);
  //     if (getCart.some((cartItem: CartProducts) => cartItem.id === product.id)) {
  //       const removedCartProduct = getCart
  //         .find((cartItem: CartProducts) => cartItem.id === product.id);
  //       const cartProduct = getCart
  //         .filter((cartItem: CartProducts) => cartItem.id !== product.id);
  //       removedCartProduct.quantity++;
  //       cartProduct.push(removedCartProduct);
  //       localStorage.setItem('cart', JSON.stringify([...getCart, cartProduct]));
  //     } else {
  //       localStorage.setItem('cart', JSON.stringify([...getCart, product]));
  //     }
  //   } else {
  //     localStorage.setItem('cart', JSON.stringify([{ ...product, quantity: 1,
  //     }]));
  //   }
  // };
  // console.log(product);
  // console.log(name);
  const navigate = useNavigate();

  return (
    <div>
      { listProducts.id.length !== 0 ? (
        <div key={ id } data-testid="product">
          <p>{ title }</p>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$${price}`}</p>
          <button
            data-testid="product-detail-link"
            onClick={ () => navigate(`/productDetails/${id}`) }
          >
            Ver Detalhes
          </button>
          <button
            data-testid="product-add-to-cart"
            onClick={ () => addToCart(listProducts) }
          >
            Adicionar
          </button>
        </div>
      ) : <p>Nenhum produto foi encontrado</p>}
    </div>
  );
}

export default ProductList;
