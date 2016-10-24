import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MenuService {
  menu: FirebaseListObservable<any[]>;
  ingredients: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.menu = af.database.list('menu');
    this.ingredients = af.database.list('ingredients');
  }

  getMenu() {
    return this.menu;
  }

  getIngredients() {
    return this.ingredients;
  }

  addRecipe(recipe, ing) {
    console.log(recipe, ing);
    this.menu.push(recipe).then(res => {
      for (var i = 0; i < ing.length; i++) {
        ing[i].recId = res.key;
        this.ingredients.push(ing[i]);
      }
    });
  }
}
