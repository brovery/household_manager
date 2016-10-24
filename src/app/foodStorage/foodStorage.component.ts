import {Component, OnInit, Input} from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data/data.service'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'foodStorage',
  templateUrl: 'foodStorage.component.html'
})

export class FoodstorageComponent implements OnInit {
  newstoredFood: Observable<any[]>;
  deleteActive: boolean = false;
  newFood: any = { name: "name", quantity: 0, exp: "06/21/2016", category: "None", delete: false };

  constructor(private dataService: DataService) {
    this.newstoredFood = dataService.getFood();
  }

  lookForDelete() {
    var found = false;

    this.newstoredFood.forEach(foods => {
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
    this.dataService.addFood(this.newFood);
  }

  deleteFood() {
    var myFoods: any = [];
    this.newstoredFood.forEach(foods => {
      myFoods = foods.map(food => {return food});
    });

    for (var i = 0; i < myFoods.length; i++) {
      if (myFoods[i].delete) {
        this.dataService.removeFood(myFoods[i].$key);
      //  TODO: Need to update the "activeDelete" status here!
      }
    }
  }

  incrementFood(food) {
    this.dataService.incrementFood(food);
  }

  decrementFood(food) {
    if (food.quantity > 0) {
      this.dataService.decrementFood(food);
    } else {
    //  TODO: Add a toaster message that lets the user know the quantity is already 0.
    }
  }

  updateDel(food) {
    this.dataService.updateDel(food);
    this.lookForDelete();
  }

}
