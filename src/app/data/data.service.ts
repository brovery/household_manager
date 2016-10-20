import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DataService {
  items: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire) {
    this.items = af.database.list('items');
    console.log(this.items);
  }



}
