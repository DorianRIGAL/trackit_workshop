import { useEffect, useState } from 'react';
import Recipe, { RecipeType } from '../recipe/recipe';

export function RecipesList() {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
      .then((data) => data.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }, []);

  return (
    <div>
      {recipes.map((recipe) => {
        return <Recipe {...recipe} />;
      })}
    </div>
  );
}

export default RecipesList;
