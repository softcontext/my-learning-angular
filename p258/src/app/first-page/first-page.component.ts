import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  template: `
    <p>
      first-page works!
    </p>

    <a routerLink="/router-link-test" routerLinkActive="active">Go to	RouterLinkTest</a>
  `,
  styles: []
})
export class FirstPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
