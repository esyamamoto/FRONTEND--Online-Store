import { Link } from 'react-router-dom';

export function Home() {
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
    </>
  );
}
