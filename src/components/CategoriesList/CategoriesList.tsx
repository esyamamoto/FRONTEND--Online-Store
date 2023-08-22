import { useEffect, useState } from 'react';
import * as api from '../../services/api';

type Categorie = {
  id: string;
  name: string;
};

function CategoriesList() {
  const [categories, setCategories] = useState<Categorie[]>([]);

  useEffect(() => {
    async function gCategories() {
      const response = await api.getCategories();
      setCategories(response);
    }
    gCategories();
  }, []);
  // console.log(categories);

  return (
    <>
      <h2>Categorias:</h2>
      <ul>
        {categories?.map((cat) => (
          <li key={ cat.id }>
            <label data-testid="category" htmlFor={ cat.id }>
              <input type="radio" name="categorie" id={ cat.id } value={ cat.id } />
              {cat.name}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
export default CategoriesList;
