import { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import { InputData, InputProducts } from '../../services/types';
import ProductList from '../../components/ProductsList/ProductsList';
import * as api from '../../services/api';

const initialState = {
  name: '',
};
const initialProducts = {
  id: '',
  title: '',
  thumbnail: '',
  price: 0,
};
export function Home() {
  const [inputData, setInputData] = useState<InputData>(initialState);
  const [searchData, setSearchData] = useState<string>('');
  const [listProducts, setListProducts] = useState<InputProducts[]>([initialProducts]);

  const handleSubmit = async () => {
    setSearchData(inputData.name);
    setInputData(initialState);
    const response = await api.getQuery(searchData);
    setListProducts(response.results);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  // console.log(listProducts);

  return (
    <>
      <div>
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
      </div>
      <div>
        <Link to="/shoppingCart" data-testid="shopping-cart-button">
          Carrinho
        </Link>
      </div>
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
      <CategoriesList />
      {listProducts?.map((product) => (
        <ProductList
          key={ product.id }
          listProducts={ {
            id: product.id,
            title: product.title,
            thumbnail: product.thumbnail,
            price: product.price,
          } }
        />
      ))}
    </>
  );
}
