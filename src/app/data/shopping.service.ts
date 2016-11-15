import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ShoppingService {
  shoppingItems: FirebaseListObservable<any[]>;
  shoppingLists: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.shoppingItems = af.database.list('shoppingItems');
    this.shoppingLists = af.database.list('shoppinglists');
  }

  getItems() {
    return this.shoppingItems;
  }

  getLists() {
    return this.shoppingLists;
  }

  addItem(item) {
    this.shoppingItems.push(item);
  }

  updatePurchased(item) {
    this.shoppingItems.update(item.$key, {'purchased': !item.purchased});
  }

  clearPurchased() {
    var myList: any = [];
    this.shoppingItems.forEach(items => {
      myList = items.map(item => {return item});
    });

    for (var i = 0; i < myList.length; i++) {
      if (myList[i].purchased) {
        this.shoppingItems.remove(myList[i].$key);
      }
    }
  }

  addList(list) {
    this.shoppingLists.push(list);
  }

}
