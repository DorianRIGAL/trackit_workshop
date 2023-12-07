import { Router } from 'express';
import { RecipesResponseDto } from './recipe';
import { GREETINGS_REPOSITORY_TOKEN } from './greetings.repository';
import { inject } from '../di';

export const greetingsRouter = Router();

greetingsRouter.get('/recipes', async (_, res) => {
  const repo = inject(GREETINGS_REPOSITORY_TOKEN);

  const body: RecipesResponseDto = {
    recipes: await repo.getGreetings(),
  };

  res.send(body);
});
/*
greetingsRouter.post('/greeting', async (req, res) => {
  const repo = inject(GREETINGS_REPOSITORY_TOKEN);

  const body: GreetingsResponseDto = {
    items: await repo.addGreetingToMeal(),
  };

  res.send(body);
});
*/