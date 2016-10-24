import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from "rxjs";

@Component({
  selector: 'foodStorage',
  templateUrl: 'foodStorage.component.html'
})
export class FoodstorageComponent implements OnInit {
  storedFood: FirebaseListObservable<any[]>;
  deleteActive: Observable<any>;
  newFood: any = { name: "name", quantity: 0, exp: "06/21/2016", category: "None", delete: false };

  constructor(private router: Router, public af: AngularFire) {
    this.storedFood = af.database.list("storedFood");
  }

  lookForDelete() {
    console.log("checking for items marked for deletion");
    var found = false;

    this.storedFood.forEach(foods => {
      foods.forEach(food => {
        if (food.delete) {
          found = true;
          console.log("Found an item marked for deletion!");
        }
      })
    });
    this.deleteActive = found;
  }

  ngOnInit(): void {
    this.deleteActive = false;
    this.lookForDelete();
  }

  addFood() {
    this.storedFood.push(this.newFood);
  }

  deleteFood(foodList) {
    var myFoods: any = [];
    this.storedFood.forEach(foods => {
      myFoods = foods.map(food => {return food});
    });

    for (var i = 0; i < myFoods.length; i++) {
      if (myFoods[i].delete) {
        console.log("deleting", myFoods[i].name);
        this.storedFood.remove(myFoods[i].$key);
      }
    }
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

  logMe(food) {
    console.log(food);
  }

  updateDel(food) {
    this.storedFood.update(food.$key, {'delete': !food.delete});
    this.lookForDelete();
  }

}
