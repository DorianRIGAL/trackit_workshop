import React from 'react';

type RecipeProps = {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
  steps: string[];
  ingredients: string[];
};

export function Recipe({ name, pictureUrl, description }: RecipeProps) {
  return (
    <div>
      <img src={pictureUrl} alt={`${name} recipe`} />
      <h3>{name}</h3>
      <span>{description}</span>
    </div>
  );
}

export default Recipe;
