import { Injectable } from '@angular/core';
import { Exercise } from './exercise';
import { EXERCISE } from './mock-exercises';

@Injectable()
export class HeroService {
    getExercises(): Promise<Exercise[]> {
        return Promise.resolve(EXERCISE);
    }

    getExercise(day: number): Promise<Exercise> {
        return this.getExercises().then(exercises => exercises.find(exercise => exercise.day === day));
    }
}