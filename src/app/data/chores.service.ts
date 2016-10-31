import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class ChoresService {
  chores: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire) {
    this.chores = af.database.list('chores');
  }

  getChores() {
    return this.chores;
  }

  addChore(chore) {
    this.chores.push(chore);
  }
}
