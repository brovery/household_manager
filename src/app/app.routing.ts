import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExerciseComponent } from './exercise/exercise.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FoodstorageComponent } from "./foodStorage/foodStorage.component";
import { DietComponent } from "./dietTracker/diet.component";
import {BudgetComponent} from "./budget/budget.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {MealplannerComponent} from "./mealPlanner/mealPlanner.component";
import {ShoppinglistComponent} from "./shoppingList/shoppingList.component";

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },{
        path: 'dashboard',
        component: DashboardComponent
    },{
        path: 'exercise',
        component: ExerciseComponent
    },{
        path: 'foodStorage',
        component: FoodstorageComponent
    },{
        path: 'diet',
        component: DietComponent
    },{
        path: 'budget',
        component: BudgetComponent
    },{
        path: 'calendar',
        component: CalendarComponent
    },{
        path: 'meals',
        component: MealplannerComponent
    },{
        path: 'shopping',
        component: ShoppinglistComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);