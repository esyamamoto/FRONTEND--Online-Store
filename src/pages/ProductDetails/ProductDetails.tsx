import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../../services/api';
import { CartProducts } from '../../services/types';
import addToCart from '../../utils/functions';
import '../../styles/ProductsDetails.css'; // Importe o arquivo CSS

const inicialState = {
  id: '',
  title: '',
  thumbnail: '',
  price: 0,
  quantity: 0,
};

function ProductDetails() {
  const { id } = useParams();
  const [itemData, setItemData] = useState<CartProducts>(inicialState);

  useEffect(() => {
    const getItem = async () => {
      const response = await api.getProductById(id as string);
      setItemData(response);
    };
    getItem();
  }, [id]);

  return (
    <div className="product-details-container">
      <div>
        <Link to="/shoppingCart" className="cart-link" data-testid="shopping-cart-button">
          Carrinho
        </Link>
      </div>
      <div>
        <img
          className="product-image"
          data-testid="product-detail-image"
          src={ itemData?.thumbnail }
          alt={ itemData?.title }
        />
        <button
          className="add-to-cart-button"
          onClick={ () => addToCart(itemData) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
        <p
          className="product-name"
          data-testid="product-detail-name"
        >
          {itemData?.title}
        </p>
        <p
          className="product-price"
          data-testid="product-detail-price"
        >
          {`R$${itemData?.price}`}
        </p>
      </div>
      <div className="product-specs">
        especificações técnicas
      </div>
    </div>
  );
}

export default ProductDetails;
