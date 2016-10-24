import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FoodService {
  storedFood: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.storedFood = af.database.list('storedFood');
  }

  getFood() {
    return this.storedFood;
  }

  addFood(newFood) {
    this.storedFood.push(newFood);
  }

  removeFood(key) {
    this.storedFood.remove(key);
  }

  incrementFood(food) {
    food.quantity++;
    this.storedFood.update(food.$key, {quantity: food.quantity});
  }

  decrementFood(food) {
    food.quantity--;
    this.storedFood.update(food.$key, {quantity: food.quantity});
  }

  updateDel(food) {
    this.storedFood.update(food.$key, {'delete': !food.delete});
  }
}
