import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  gender = 2;

  constructor() { }

  ngOnInit() {
  }

}
