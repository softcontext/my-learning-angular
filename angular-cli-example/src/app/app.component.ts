import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // 화면 구조
  styleUrls: ['./app.component.css'] // 화면 디자인
})
export class AppComponent { // 화면 데이터, 로직(주로 이벤트 함수)
  title = 'Hello World!';
  message: string = '안녕하세요!';

  popup(data, t, e, $e){
    console.log(data);
    // Hi
    console.log(t);
    // AppComponent {title: "Hello World!", message: "안녕하세요!"}

    console.log(e);
    // undefined
    console.log($e);
    // MouseEvent {
    // isTrusted: true,
    // screenX: 515, screenY: 377,
    // clientX: 61, clientY: 251, …}

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
