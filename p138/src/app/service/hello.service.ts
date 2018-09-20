import { Injectable } from '@angular/core';

// providedIn: 'root'
// Angular 6 에서 추가되었습니다.
// 루트모듈안에서 공급받습니다.
@Injectable(
// {
//   providedIn: 'root'
// }
)
export class HelloService {
  helloTitle = 'This is HelloService\'s Title.';

  constructor() { }

  getTitle() {
    return this.helloTitle;
  }

  setTitle(title) {
    this.helloTitle = title;
  }
}
