export type RecipeDto = {
    id: string;
    name: string;
    description: string;
    pictureUrl: string;
    steps: string[];
    ingredients: string[];
  };
  
  export type RecipesResponseDto = {
    recipes: RecipeDto[];
  };
  