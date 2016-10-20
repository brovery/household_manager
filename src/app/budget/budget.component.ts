import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'foodStorage',
    templateUrl: 'budget.component.html'
})
export class BudgetComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {

    }
}
