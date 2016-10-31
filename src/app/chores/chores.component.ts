import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'chores',
  templateUrl: 'chores.component.html'
})

export class ChoresComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

}
