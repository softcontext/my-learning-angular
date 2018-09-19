import { Component, OnInit } from '@angular/core';
import { StateService } from '../common/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page!';
  body: string = 'This is the about home body';
  message: string;

  // Dependency Injection:
  // 앵귤러가 미리 만들어 놓은 서비스객체 중에서 자료형이
  // StateService인 객체를 파라미터로 전달해 달라고 요청합니다.
  // 생성자 파라미터 변수 앞에 접근제어자를 붙이면
  // 컴포넌트 객체의 멤버프로퍼티로 추가된다.
  constructor(private _stateService: StateService) { }

  ngOnInit() {
    // message 변수는 값이 없었는데
    // 서비스객체로부터 값을 전달받아 초기값으로 사용합니다.
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    console.log(m);
    alert(m);
    this._stateService.setMessage(m);
  }
}
