import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'test description', 'https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg'),
    new Recipe('Taste recipe', 'taste description', 'https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }

}
