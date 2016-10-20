import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'foodStorage',
    templateUrl: 'shoppingList.component.html'
})
export class ShoppinglistComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {

    }
}
