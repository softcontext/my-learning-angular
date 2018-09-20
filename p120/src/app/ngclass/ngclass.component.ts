import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  isActive: boolean = false;
  myclass: string = "active";

  constructor() { }

  ngOnInit() {
  }

}
