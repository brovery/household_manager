import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'foodStorage',
    templateUrl: 'mealPlanner.component.html'
})
export class MealplannerComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {

    }
}
