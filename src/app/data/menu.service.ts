import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class MenuService {
  menu: FirebaseListObservable<any[]>;
  ingredients: FirebaseListObservable<any[]>;
  recipe: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.menu = af.database.list('menu');
    this.ingredients = af.database.list('ingredients');
    this.recipe = af.database.list('menu', {
      query: {
        equalTo: "-KUss6keuxJILhACntEV"
      }
    });
  }

  getMenu() {
    return this.menu;
  }

  getIngredients() {
    return this.ingredients;
  }

  getRecipe(key) {
    return this.af.database.object('/menu/' + key);
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
