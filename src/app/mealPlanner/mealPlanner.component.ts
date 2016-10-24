import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'foodStorage',
    templateUrl: 'mealPlanner.component.html'
})
export class MealplannerComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
    }
}
