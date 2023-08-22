import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../../services/api';
import { InputProducts } from '../../services/types';

function ProductDetails() {
  const { id } = useParams();
  const [itemData, setItemData] = useState<InputProducts>();

  useEffect(() => {
    const getItem = async () => {
      const response = await api.getProductById(id as string);
      setItemData(response);
    };
    getItem();
  }, [id]);
  return (
    <>
      <div>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          Carrinho
        </Link>
      </div>
      <div>
        <img
          data-testid="product-detail-image"
          src={ itemData?.thumbnail }
          alt={ itemData?.title }
        />
        <p data-testid="product-detail-name">{ itemData?.title }</p>
        <p data-testid="product-detail-price">{`R$${itemData?.price}`}</p>
      </div>
      <div>
        especifiçoes tecnicas
      </div>
    </>
  );
}

export default ProductDetails;
