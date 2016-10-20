import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'foodStorage',
  templateUrl: 'foodStorage.component.html'
})
export class FoodstorageComponent implements OnInit {
  storedFood: FirebaseListObservable<any[]>;
  newFood: any = { name: "name", quantity: 0, exp: "MM/DD/YYYY" };

  constructor(private router: Router, public af: AngularFire) {
    this.storedFood = af.database.list("storedFood");
  }

  ngOnInit(): void { }

  addFood() {
    console.log(this.newFood);
    const food = this.af.database.list('/storedFood');
    food.push(this.newFood);
  }

}
