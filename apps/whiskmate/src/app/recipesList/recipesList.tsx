import { RecipeProps } from '../recipe/recipe';

export function RecipesList() {
  const recipes: RecipeProps[] = [];

  return (
    <div>
      {recipes.map(() => {
        return 'Oui';
      })}
    </div>
  );
}

export default RecipesList;
