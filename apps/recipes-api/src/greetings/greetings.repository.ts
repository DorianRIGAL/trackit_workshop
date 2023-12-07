import { JSONSyncPreset } from 'lowdb/node';
import { delay } from 'tsyringe';

import { RecipeDto } from './recipe';


export interface GreetingsRepository {
  getGreetings(): Promise<RecipeDto[]>;
}

export class GreetingsRepositoryImpl {
  private _db = JSONSyncPreset('greetings.db.json', {
    "recipes": [
      {
        "id": "rec_1",
        "name": "Creamy Tomato Basil Pasta",
        "description": "A simple and delicious pasta dish with a creamy tomato basil sauce.",
        "pictureUrl": "https://dishingouthealth.com/wp-content/uploads/2022/09/CreamyTomatoPasta_Square.jpg",
        "steps": [
          "Cook the pasta according to package directions.",
          "While the pasta is cooking, heat the olive oil in a large skillet over medium heat.",
          "Add the garlic and cook until fragrant, about 30 seconds.",
          "Add the diced tomatoes, tomato paste, and basil. Bring to a simmer and cook for 10 minutes.",
          "Stir in the heavy cream and season with salt and pepper to taste.",
          "Drain the pasta and add it to the skillet with the sauce. Toss to coat.",
          "Serve immediately with grated Parmesan cheese."
        ],
        "ingredients": [
          "1 pound pasta",
          "1/4 cup olive oil",
          "3 cloves garlic, minced",
          "1 (14.5-ounce) can diced tomatoes, undrained",
          "2 tablespoons tomato paste",
          "1/2 cup fresh basil, chopped",
          "1/2 cup heavy cream",
          "Salt and pepper to taste"
        ]
      },
      {
        "id": "rec_2",
        "name": "Chili Cheese Quesadillas",
        "description": "A classic comfort food that's easy to make and always satisfying.",
        "pictureUrl": "https://mylifecookbook.com/wp-content/uploads/2022/11/chili-quesadilla-closeupSQ.jpg",
        "steps": [
          "Heat a large skillet over medium heat.",
          "Place a tortilla on the skillet and sprinkle with cheese.",
          "Top the cheese with your favorite chili toppings, such as shredded beef, beans, and onions.",
          "Add another tortilla to the top and press down gently.",
          "Cook for 2-3 minutes per side, or until the tortilla is golden brown and the cheese is melted.",
          "Cut the quesadilla into wedges and serve immediately."
        ],
        "ingredients": [
          "2 large flour tortillas",
          "1 cup shredded cheddar cheese",
          "1/2 cup chili, heated",
          "Shredded beef, beans, onions, and other toppings of your choice"
        ]
      },
      {
        "id": "rec_3",
        "name": "Chocolate Chip Cookies",
        "description": "A classic recipe that's always a hit.",
        "pictureUrl": "https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1.jpg",
        "steps": [
          "Preheat oven to 375 degrees F (190 degrees C). Line baking sheets with parchment paper.",
          "In a large bowl, cream together the butter and sugars until light and fluffy. Beat in the egg and vanilla extract.",
          "In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add to the wet ingredients, mixing until just combined. Do not overmix.",
          "Stir in the chocolate chips. Drop by rounded tablespoons onto the prepared baking sheets.",
          "Bake for 9-11 minutes, or until the edges are golden brown and the centers are set.",
          "Let the cookies cool on the baking sheets for a few minutes before transferring to a wire rack to cool completely."
        ],
        "ingredients": [
          "1 cup (2 sticks) unsalted butter, softened",
          "1 1/2 cups granulated sugar",
          "3/4 cup packed light brown sugar",
          "2 large eggs",
          "1 teaspoon pure vanilla extract",
          "2 1/2 cups all-purpose flour",
          "1 teaspoon baking soda",
          "1/2 teaspoon salt",
          "2 cups semisweet chocolate chips"
        ]
      },
      {
        "id": "rec_4",
        "name": "Savory Potato Pancakes",
        "description": "These savory potato pancakes are a delicious and easy-to-make appetizer or side dish. They are made with simple ingredients that you probably already have on hand.",
        "pictureUrl": "https://therecipecritic.com/wp-content/uploads/2021/02/potatopancakeshero.jpg",
        "steps": [
          "Peel and thinly slice the potatoes.",
          "In a large bowl, combine the potatoes, flour, eggs, parsley, salt, and pepper.",
          "Heat the oil in a large skillet over medium heat.",
          "Drop spoonfuls of potato mixture into the hot oil and cook until golden brown on both sides.",
          "Drain on paper towels and serve warm."
        ],
        "ingredients": [
          "2 pounds russet potatoes, peeled and thinly sliced",
          "1/2 cup all-purpose flour",
          "2 eggs",
          "1 tablespoon chopped fresh parsley",
          "1 teaspoon salt",
          "1/2 teaspoon black pepper",
          "Oil for frying"
        ]
      },
      {
        "id": "rec_5",
        "name": "Classic Margherita Pizza",
        "description": "A classic pizza recipe that's always a crowd-pleaser. Made with a simple dough, homemade tomato sauce, fresh mozzarella cheese, and basil, this pizza is sure to satisfy your cravings.",
        "pictureUrl": "https://ohsweetbasil.com/wp-content/uploads/four-cheese-margherita-pizza-recipe-12-scaled-1400x2100.jpg",
        "steps": [
          "In a large bowl, whisk together 2 cups of warm water, 1 teaspoon of sugar, and 1 packet of yeast. Let it sit for 5 minutes until foamy.",
          "Add 3 ½ cups of all-purpose flour, 2 tablespoons of olive oil, and 1 teaspoon of salt to the yeast mixture. Mix until a dough forms.",
          "Knead the dough on a lightly floured surface for 10 minutes, or until smooth and elastic.",
          "Place the dough in a lightly oiled bowl, cover with plastic wrap, and let it rise in a warm place for 1 hour, or until doubled in size.",
          "Preheat the oven to 450°F (230°C).",
          "While the dough is rising, make the tomato sauce. Heat 1 tablespoon of olive oil in a saucepan over medium heat. Add 1 clove of minced garlic and cook for 30 seconds until fragrant.",
          "Add 1 (28-ounce) can of crushed tomatoes and ½ teaspoon of salt. Bring to a simmer and cook for 15 minutes, or until the sauce has thickened.",
          "Stretch or roll the dough out into a 12-inch circle. Transfer the dough to a lightly greased pizza pan.",
          "Spread the tomato sauce evenly over the crust.",
          "Top with 8 ounces of shredded mozzarella cheese.",
          "Arrange 12 fresh basil leaves on top of the cheese.",
          "Bake for 10-15 minutes, or until the crust is golden brown and the cheese is melted and bubbly.",
          "Cut into slices and serve immediately."
        ],
        "ingredients": [
          "2 cups of warm water",
          "1 teaspoon of sugar",
          "1 packet of yeast",
          "3 ½ cups of all-purpose flour",
          "2 tablespoons of olive oil",
          "1 teaspoon of salt",
          "1 (28-ounce) can of crushed tomatoes",
          "1 clove of minced garlic",
          "8 ounces of shredded mozzarella cheese",
          "12 fresh basil leaves"
        ]
      },
      {
        "id": "rec_6",
        "name": "Tartiflette",
        "description": "A traditional French dish made with potatoes, Reblochon cheese, and lardons.",
        "pictureUrl": "https://img.taste.com.au/VqLW9HQ7/w720-h480-cfill-q80/taste/2017/06/tartiflette-127553-1.jpg",
        "steps": [
          "Preheat oven to 400°F (200°C).",
          "Slice potatoes thinly.",
          "In a large skillet, cook lardons over medium heat until crispy.",
          "Arrange potatoes in a greased baking dish.",
          "Pour half of the crème fraîche over the potatoes.",
          "Add lardons and sprinkle with salt and pepper.",
          "Cut the Reblochon cheese into wedges and arrange them on top of the potatoes.",
          "Cover with the remaining crème fraîche.",
          "Bake for 30-40 minutes, or until potatoes are tender and cheese is melted and bubbly.",
          "Serve hot."
        ],
        "ingredients": [
          "6 medium potatoes",
          "8 ounces smoked bacon, diced",
          "14 ounces Reblochon cheese, cut into wedges",
          "1 cup crème fraîche",
          "Salt and pepper to taste"
        ]
      }
    ]
  });

  constructor() {
    this._db.write();
  }

  async getGreetings(): Promise<RecipeDto[]> {
    // return [{
    //   id: 'hello',
    //   name: 'hello',
    //   description: 'hello',
    //   pictureUrl: 'hello',
    //   steps: [],
    //   ingredients: []
    // }];
    // return [{ id: 'greet_1', label: 'Hi!' }];
    this._db.read();
    return this._db.data.recipes;
  }
}

export const GREETINGS_REPOSITORY_TOKEN = delay<GreetingsRepository>(
  () => GreetingsRepositoryImpl
);
