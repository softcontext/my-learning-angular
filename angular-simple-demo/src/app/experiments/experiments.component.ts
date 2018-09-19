import { Component, OnInit } from '@angular/core';
import { Experiment } from '../model/experiment';
import { ExperimentsService } from '../common/experiments.service';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  title: string = 'Experiments Page';
  body: string = 'This is the about experiments body';
  // experiments: Experiment[];
  experiments: Array<Experiment>;

  constructor(private _experimentsService: ExperimentsService) {
    console.log('ExperimentsComponent # constructor')
  }

  ngOnInit() {
    this.experiments = this._experimentsService
      .getExperiments();
    // Deep Copy Array with Objects
    this.experiments = JSON.parse(
      JSON.stringify(this.experiments));
  }
}
