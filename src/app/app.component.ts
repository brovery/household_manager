import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean = false;

  constructor(public af: AngularFire) {
    af.auth.subscribe(state => {
      if(state) {
        this.isLoggedIn = true;
      } else {
        console.warn("NOT LOGGED IN!")
      }
    })
  }

  login() {
    this.af.auth.login().then((success) => {
      console.log("Login Success", success);
      this.isLoggedIn = true;
    }).catch((error) => {
      console.error("Login Failure", JSON.stringify(error));
    });
  }

  logout() {
    this.af.auth.logout();
    this.isLoggedIn = false;
  }

  title = 'Household Manager!';
}
