import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Pasta recipe',
            'test description',
            'https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg',
            [
                new Ingredient('Spaghetti', 10),
                new Ingredient('Sauce', 2)
            ]),
        new Recipe(
            'Pizza recipe',
            'taste description',
            'https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg',
            [
                new Ingredient('Base', 1),
                new Ingredient('Sauce', 2),
                new Ingredient('Toppings', 10)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}