import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingService } from "../data/shopping.service";
import { Observable } from "rxjs";

@Component({
  selector: 'foodStorage',
  templateUrl: 'shoppingList.component.html'
})
export class ShoppinglistComponent implements OnInit {
  newItem: any = {name: "", qty: "", purchased: false};
  shoppingItems: Observable<any[]>;
  shoppingLists: Observable<any[]>;
  showAddListElements: boolean = false;
  newList: any = {name: ""};

  constructor(private router: Router, private shoppingService: ShoppingService) {
    this.shoppingItems = shoppingService.getItems();
    this.shoppingLists = shoppingService.getLists();
  }

  ngOnInit(): void {  }

  addItem() {
    console.log(this.newItem);
    this.shoppingService.addItem(this.newItem);

    this.newItem.name = "";
    this.newItem.qty = "";
  }

  updatePurchased(item) {
    this.shoppingService.updatePurchased(item);
    console.log(item);
  }

  clearPurchased() {
    this.shoppingService.clearPurchased();
  }

  enableAddList() {
    this.showAddListElements = true;
  }

  addList() {
    this.shoppingService.addList(this.newList);
    this.showAddListElements = false;
  }

  cancelList() {
    this.showAddListElements = false;
  }
}
