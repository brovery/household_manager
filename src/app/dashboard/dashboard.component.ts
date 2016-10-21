import {Component, OnInit, state} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {

    }
}
