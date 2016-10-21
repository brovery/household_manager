import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'foodStorage',
  templateUrl: 'foodStorage.component.html'
})
export class FoodstorageComponent implements OnInit {
  storedFood: FirebaseListObservable<any[]>;
  newFood: any = { name: "name", quantity: 0, exp: "06/21/2016", category: "None" };

  constructor(private router: Router, public af: AngularFire) {
    this.storedFood = af.database.list("storedFood");
  }

  ngOnInit(): void { }

  addFood() {
    this.storedFood.push(this.newFood);
  }

  deleteFood(food) {
    this.storedFood.remove(food);
  }

  incrementFood(food) {
    food.quantity++;
    this.storedFood.update(food.$key, {quantity: food.quantity});
  }

  decrementFood(food) {
    if (food.quantity > 0) {
      food.quantity--;
      this.storedFood.update(food.$key, {quantity: food.quantity});
    } else {
    //  TODO: Add a toaster message that lets the user know the quantity is already 0.
    }


  }

}
