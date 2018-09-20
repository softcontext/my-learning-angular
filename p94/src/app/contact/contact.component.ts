import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  // templateUrl: './contact.component.html',
  template: `
    <h3>contact.component.<mark>html</mark></h3>
  `,
  // styleUrls: ['./contact.component.css']
  styles: [
    `
    h3 {
      border: 1px dotted gray;
      height: 100px;
    }
    `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
