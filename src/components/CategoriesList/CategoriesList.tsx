import { useEffect, useState } from 'react';
import * as api from '../../services/api';
import '../../styles/CategoriesList.css';

type Categorie = {
  id: string;
  name: string;
};
type Props = {
  searhByCategorie: (categorieId: string, data: string) => void;
};

function CategoriesList(props: Props) {
  const { searhByCategorie } = props;
  const [categories, setCategories] = useState<Categorie[]>([]);

  useEffect(() => {
    async function gCategories() {
      const response = await api.getCategories();
      setCategories(response);
    }
    gCategories();
  }, []);

  const onSubmit = (id: string, data: string) => {
    searhByCategorie(id, data);
  };

  return (
    <div className="categories-list">
      <h2>Categorias:</h2>
      <ul>
        {categories?.map((cat) => (
          <li key={ cat.id }>
            <label data-testid="category" htmlFor={ cat.id }>
              <input
                type="button"
                name="categorie"
                id={ cat.id }
                value={ cat.name }
                onClick={ () => onSubmit(cat.id, cat.name) }
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
