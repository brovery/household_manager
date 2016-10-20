import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EXERCISE, EXERCISEDETAILS } from './mock-exercises';
import { DataService } from '../data/data.service'

@Component({
    selector: 'exercise',
    templateUrl: 'exercise.component.html'
})
export class ExerciseComponent implements OnInit {
    constructor(private router: Router, private dataService: DataService) {}

    // Declare variables here.
    program = 'P90X';
    exercises = EXERCISE;
    details = EXERCISEDETAILS[0];

    // Component Methods go here.
    ngOnInit(): void {

    }

    logit(): void {
        console.log(this.details);
    }
}
