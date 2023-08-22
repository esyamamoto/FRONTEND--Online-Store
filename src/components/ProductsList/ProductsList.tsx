import { useNavigate } from 'react-router-dom';
import { InputProducts } from '../../services/types';

type ListProductProp = {
  listProducts: InputProducts
};
function ProductList({ listProducts }: ListProductProp) {
  const { id, title, thumbnail, price } = listProducts;

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
        </div>
      ) : <p>Nenhum produto foi encontrado</p>}
    </div>
  );
}

export default ProductList;
