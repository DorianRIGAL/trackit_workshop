import { useEffect, useState } from 'react';
import Recipe, { RecipeType } from '../recipe/recipe';
import SearchBar from '../searchBar/searchBar';

export function RecipesList() {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [keywords, setKeywords] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:3333/recipes')
      .then((data) => data.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  return (
    <div>
      <SearchBar onChange={setKeywords} value={keywords} />
      {recipes
        .filter(
          (recipe) =>
            recipe.name.includes(keywords) ||
            recipe.description.includes(keywords)
        )
        .map((recipe) => {
          return <Recipe {...recipe} />;
        })}
    </div>
  );
}

export default RecipesList;
