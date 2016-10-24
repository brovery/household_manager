import { Component } from '@angular/core';
import { MenuService } from '../../data/menu.service';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html'
})

export class MenuComponent {
  menu: Observable<any[]>;
  ingredients: Observable<any[]>;
  newRecipe: any = { title: "", description: "", ingredients: 0, directions: "" };
  newIngredientsList = [{ recId: 0, ing: "" }];

  constructor(private menuService: MenuService) {
    this.menu = menuService.getMenu();
    this.ingredients = menuService.getIngredients();
  }

  addRecipe() {
    this.menuService.addRecipe(this.newRecipe, this.newIngredientsList);
  }

  addIngredient() {
    this.newIngredientsList.push({recId: 0, ing: ""});
  }

  deleteIngredient() {
    this.newIngredientsList.pop();
  }

}
