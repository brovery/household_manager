import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'diet',
    templateUrl: 'diet.component.html'
})
export class DietComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {

    }
}
