import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import { InputData, InputProducts } from '../../services/types';
import ProductList from '../../components/ProductsList/ProductsList';
import * as api from '../../services/api';
import '../../styles/Home.css';

const initialState = {
  name: '',
};
const initialProducts = {
  id: '',
  title: '',
  thumbnail: '',
  price: 0,
  quantity: 0,
};

export function Home() {
  const [inputData, setInputData] = useState<InputData>(initialState);
  const [listProducts, setListProducts] = useState<InputProducts[]>([initialProducts]);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await api.getQuery(inputData.name);
    setListProducts(response.results);
    setInputData(initialState);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const searhByCategorie = async (categorieId: string, data: string) => {
    const response = await api.getProductsFromCategoryAndQuery(categorieId, data);
    setListProducts(response.results);
  };

  return (
    <div className="home-container">
      <div className="search-cart-container">
        <label htmlFor="searchInput">
          <input
            data-testid="query-input"
            type="text"
            value={ inputData.name }
            placeholder="pesquisar"
            name="name"
            onChange={ handleChange }
          />
          <button
            data-testid="query-button"
            onClick={ handleSubmit }
          >
            Buscar
          </button>
        </label>
        <Link to="/shoppingCart" data-testid="shopping-cart-button" id="carrinhoButton">
          Carrinho
        </Link>
      </div>
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
      <CategoriesList searhByCategorie={ searhByCategorie } />
      <div className="products-container">
        {listProducts.map((product) => (
          <div className="product-card" key={ product.id }>
            <p>{ product.title }</p>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>{`R$${product.price}`}</p>
            <button
              id="btnproductDetails"
              data-testid="product-detail-link"
              onClick={ () => navigate(`/productDetails/${product.id}`) }
            >
              Ver Detalhes
            </button>
            <button
              id="btnproductDetails"
              data-testid="product-add-to-cart"
              onClick={ () => addToCart(product) }
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
