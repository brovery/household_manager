import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { routing } from './app.routing';
import { ExerciseComponent } from './exercise/exercise.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import {FoodstorageComponent} from "./foodStorage/foodStorage.component";
import {DietComponent} from "./dietTracker/diet.component";
import {BudgetComponent} from "./budget/budget.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {MealplannerComponent} from "./mealPlanner/mealPlanner.component";
import {ShoppinglistComponent} from "./shoppingList/shoppingList.component";
import {DataService} from "./data/data.service";

export const firebaseConfig = {
  apiKey: "AIzaSyAuu7jwIqdsZ-MJbWbKvlUCygq2BJ0fQ1I",
  authDomain: "householdmanager-9c5b3.firebaseapp.com",
  databaseURL: "https://householdmanager-9c5b3.firebaseio.com",
  storageBucket: "householdmanager-9c5b3.appspot.com",
  messagingSenderId: "407731181360"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    DashboardComponent,
    FoodstorageComponent,
    DietComponent,
    BudgetComponent,
    CalendarComponent,
    MealplannerComponent,
    ShoppinglistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
