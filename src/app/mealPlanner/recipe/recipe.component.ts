import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {MenuService} from "../../data/menu.service";

@Component({
  selector: 'recipePage',
  templateUrl: 'recipe.component.html'
})

export class RecipeComponent {
  ingredients: Observable<any[]>;
  myRecipe: Observable<any>;
  recipeKey = "-KUss6keuxJILhACntEV";

  constructor(private recipeService: MenuService) {
    this.ingredients = recipeService.getIngredients();
    this.myRecipe = recipeService.getRecipe(this.recipeKey);
  }

}
