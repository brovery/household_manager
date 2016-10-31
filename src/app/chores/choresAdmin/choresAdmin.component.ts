import { Component } from '@angular/core';
import { Observable } from "rxjs";
import {ChoresService} from "../../data/chores.service";

@Component({
  selector: 'choresAdmin',
  templateUrl: 'choresAdmin.component.html'
})

export class ChoresAdminComponent {
  today = new Date();
  weekday: any = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friady", "Saturday"];
  chores: Observable<any[]>;
  newChore: any = {
    name: "",
    repetition: 1, //type of repetition. 1 = daily, 2 = every other day, 3 = every 3rd day, etc.  = every month.
    dayOfWeek: 1, //day of the week the chore is scheduled for.
    points: 10, //point value for completing the chore.
  };
  repetition: string = "1) Daily";
  dayOfWeek: string = this.weekday[this.today.getDay()];


  constructor(private choresService: ChoresService) {
    this.chores = choresService.getChores();
  }

  addChore() {
    this.newChore.repetition = Number(this.repetition.charAt(0));

    for (var i = 0; i < this.dayOfWeek.length; i++) {
      if (this.weekday[i] === this.dayOfWeek) {
        this.newChore.dayOfWeek = i;
      }
    }

    console.log(this.newChore);
    this.choresService.addChore(this.newChore);
  }
}
