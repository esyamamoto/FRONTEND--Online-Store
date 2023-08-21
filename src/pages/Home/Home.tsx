import { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoriesList from '../../components/categories';
import { getQuery } from '../../services/api';

const initialState = {
  name: '',
};

type InputData = {
  name: string
};

export function Home() {
  const [inputData, setInputData] = useState<InputData>(initialState);
  const [searchData, setSearchData] = useState<any>([]);
  // console.log(searchData);
  const handleSubmit = async () => {
    const response = await getQuery(inputData.name);
    setSearchData(response);
  };
  // const [inputData, setInputData] = useState<InputData>(initialState);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  console.log(searchData);
  return (
    <>
      <div>
        <label htmlFor="searchInput">
          <input
            type="text"
            value={ inputData.name }
            placeholder="pesquisar"
            name="name"
            onChange={ handleChange }
          />
          <button
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
    </>
  );
}
