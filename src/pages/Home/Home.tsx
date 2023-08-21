import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../services/api';

type Categorie = {
  id: string,
  name: string,
};
export function Home() {
  const [categories, setCategories] = useState<Categorie[]>([]);

  useEffect(() => {
    async function gCategories() {
      const response = await api.getCategories();
      setCategories(response);
    }
    gCategories();
  }, []);
  console.log(categories);

  return (
    <>
      <div>
        <label htmlFor="searchInput">
          <input type="text" placeholder="pesquisar" name="searchInput" />
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
      <div>
        <h2>Categorias:</h2>
        <ul>
          {categories.map((cat) => (
            <li key={ cat.id }>
              <label data-testid="category" htmlFor={ cat.id }>
                <input type="radio" name="categorie" id={ cat.id } value={ cat.id } />
                {cat.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
