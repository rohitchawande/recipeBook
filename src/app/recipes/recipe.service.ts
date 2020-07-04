import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test recipe', 'test description', 'https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg'),
        new Recipe('Taste recipe', 'taste description', 'https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}