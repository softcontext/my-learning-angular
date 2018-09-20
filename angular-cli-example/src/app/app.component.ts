import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // 화면 구조
  styleUrls: ['./app.component.css'] // 화면 디자인
})
export class AppComponent { // 화면 데이터, 로직(주로 이벤트 함수)
  title = 'Hello World!';
  message: string = '안녕하세요!';

  @ViewChild('btn')
  myButton;

  popup(data, t, e, $e, $t){
    console.log(data);
    // Hi
    console.log(t); // this 라는 예약어는 엘리먼트가 아닌 객체를 가리킨다.
    // AppComponent {title: "Hello World!", message: "안녕하세요!"}

    console.log(e); // event 라는 예약어를 사용하지 못한다.
    // undefined
    console.log($e); // $event 라는 키워드로 이벤트 객체를 받는다.
    // MouseEvent {
    // isTrusted: true,
    // screenX: 515, screenY: 377,
    // clientX: 61, clientY: 251, …}

    console.log('--------')
    console.log($t); // $this 라는 예약어는 없다.

    console.log(this.myButton);
    // #btn: 화면참조 설정 + @ViewChild('btn') 설정으로 엘리먼트 참조를
    // 얻을 수 있다.
    console.log(this.myButton.nativeElement.textContent);

    alert('^____^');
  }


}

// 1. app.component.html
// 2. app.component.css
// 3. app.component.ts (class AppComponent)
// 세 개의 요소를 묶어서 컴포넌트라고 부른다.
// 코드에서는 AppComponent라는 자료형을 사용하고
// HTML에서는 selector: 'app-root' 에서 지정한
// app-root를 태그로 사용할 수 있다.
// 브라우저에게 전달하는 index.html 내에
// <app-root></app-root> 라고 selector 문자열을
// 태그처럼 사용할 수 있습니다.
