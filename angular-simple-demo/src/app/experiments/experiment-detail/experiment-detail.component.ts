import { Component, OnInit, Input } from '@angular/core';
import { Experiment } from '../../model/experiment';

@Component({
  selector: 'app-experiment-detail',
  templateUrl: './experiment-detail.component.html',
  styleUrls: ['./experiment-detail.component.css']
})
export class ExperimentDetailComponent implements OnInit {
  // ExperimentsComponent 가 가진 변수 experiments가 가리키는
  // 배열에서 객체를 하나씩 꺼내어 전달하므로
  // experiment 변수에 Experiment 자료형의 객체가 할당됩니다.
  // @Input(): 이 변수에 초기 값은 이 컴포넌트를 사용하는 곳에서
  // 전달하므로 받아서 사용하는 것을 나타낸다.
  @Input() experiment: Experiment;
  a: number = 10;
  @Input() b: number;

  constructor() {
    console.log('ExperimentDetailComponent # constructor')
  }

  doExperiment(): void {
    // experiment.completed 값을 HTML에서 사용하고 있는데,
    // 화면에서 사용하는 상태가 바뀌면 화면은 자동으로 갱신된다.
    this.experiment.completed += 1;
    this.a++;
    this.b++;
  };

  ngOnInit() {}
}
