import { JSONSyncPreset } from 'lowdb/node';
import { delay } from 'tsyringe';

import { RecipeDto } from './recipe';


export interface GreetingsRepository {
  getGreetings(): Promise<RecipeDto[]>;
}

export class GreetingsRepositoryImpl {
  private _db = JSONSyncPreset('greetings.db.json', {
    greetings: [
      {
        id: 'greet_1',
        label: 'Hi!',
      },
    ],
  });

  constructor() {
    this._db.write();
  }

  async getGreetings(): Promise<RecipeDto[]> {
    return [{
      id: 'hello',
      name: 'hello',
      description: 'hello',
      pictureUrl: 'hello',
      steps: [],
      ingredients: []
    }];
    // return [{ id: 'greet_1', label: 'Hi!' }];
    // this._db.read();
    // return this._db.data.greetings;
  }
}

export const GREETINGS_REPOSITORY_TOKEN = delay<GreetingsRepository>(
  () => GreetingsRepositoryImpl
);
