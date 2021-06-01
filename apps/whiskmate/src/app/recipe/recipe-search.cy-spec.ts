import { of } from 'rxjs';
import { RecipeFilter } from './recipe-filter';
import { RecipeRepository } from './recipe-repository.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { mount } from '@jscutlery/cypress-angular/mount';
import { getHarness } from '@jscutlery/cypress-harness';
import { RecipeSearchComponent } from './recipe-search.component';
import { RecipeSearchHarness } from './recipe-search.harness';

class FakeRecipeRepository {
  _recipes = [
    {
      id: 'cauliflower-pomegranate-and-pistachio-salad',
      name: 'Cauliflower, pomegranate and pistachio salad',
      pictureUri:
        'https://ottolenghi.co.uk/media/contentmanager/content/cache/646x458//Cauliflower,-pomegranate-and-pistachio-salad.jpg',
    },
    {
      id: 'braised-eggs-with-leek-and-za-atar',
      name: 'Braised eggs with leek and za’atar',
      pictureUri:
        'https://ottolenghi.co.uk/media/contentmanager/content/cache/646x458//Braised-eggs-with-leek-and-za%E2%80%99atar.jpg',
    },
  ];

  search(filter: RecipeFilter) {
    return of(
      Object.entries(filter).length === 0 ? this._recipes : [this._recipes[0]]
    );
  }
}

describe(RecipeSearchComponent.name, () => {
  const harness = getHarness(RecipeSearchHarness);

  beforeEach(() =>
    mount(RecipeSearchComponent, {
      imports: [BrowserAnimationsModule],
      /* eslint-disable-next-line @typescript-eslint/no-var-requires */
      style: require('!!css-loader!../../styles.css').toString(),
      providers: [
        {
          provide: RecipeRepository,
          useClass: FakeRecipeRepository,
        },
      ],
    })
  );

  it('should show recipes', () => {
    const recipeNames = harness.getRecipeNames();
    recipeNames.should(
      'contain',
      'Cauliflower, pomegranate and pistachio salad'
    );
    recipeNames.should('have.length', 2);
  });

  it('should filter recipes', () => {
    harness.getFilter().setValue({
      maxIngredientCount: 10,
      maxStepCount: 3,
    });
    harness.getRecipeNames().should('have.length', 1);
  });

  it('should disabled recipe once added', () => {
    harness.getFirstRecipeAddButton().isDisabled().should('equal', false);
    harness.getFirstRecipeAddButton().then((harness) => harness.click());
    harness.getFirstRecipeAddButton().isDisabled().should('equal', true);
  });
});
