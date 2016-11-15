import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { routing } from './app.routing';
import { CalendarModule } from 'angular2-calendar';

//  My Components
import { ExerciseComponent } from './exercise/exercise.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { FoodstorageComponent} from "./foodStorage/foodStorage.component";
import { DietComponent } from "./dietTracker/diet.component";
import { BudgetComponent } from "./budget/budget.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { MealplannerComponent } from "./mealPlanner/mealPlanner.component";
import { ShoppinglistComponent } from "./shoppingList/shoppingList.component";
import { MealOverviewComponent } from "./mealPlanner/mealOverview/mealOverview.component";
import { MenuComponent } from "./mealPlanner/menu/menu.component";
import { Ang2CalendarComponent } from "./ang2-calendar/ang2-calendar.component";
import { RecipeComponent } from "./mealPlanner/recipe/recipe.component";
import { ChoresComponent } from "./chores/chores.component";
import { ChoresHomeComponent } from "./chores/choresHome/choresHome.component";
import { ChoresAdminComponent } from "./chores/choresAdmin/choresAdmin.component";

//  My Services
import { FoodService } from "./data/food.service";
import { MenuService } from "./data/menu.service";
import { ChoresService } from "./data/chores.service";
import { ShoppingService } from "./data/shopping.service";

const firebaseConfig = {
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
    ShoppinglistComponent,
    MealOverviewComponent,
    MenuComponent,
    Ang2CalendarComponent,
    RecipeComponent,
    ChoresComponent,
    ChoresHomeComponent,
    ChoresAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    CalendarModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    FoodService,
    MenuService,
    ChoresService,
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
