import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

// It's the brackets ([]) that make it an attribute selector.
@Directive({
  selector: '[myClick]'
})
export class MyClickDirective {
  toggle: boolean = false;

  // @Output() : 키 값은 = clicks
  // @Output('myClick') : 키 값은 = myClick
  @Output('myClick')
  clicks: EventEmitter<boolean> = new EventEmitter<boolean>();

  // ElementRef:
  // myClick 을 속성으로 가지고 있는 엘리먼트를 참조하는 객체
  // el.nativeElement:
  // 실제 엘리먼트의 참조를 가리킨다.
  constructor(el: ElementRef) {
    // 버튼에 클릭 이벤트리스너를 장착한다.
    el.nativeElement.addEventListener('click', (event: Event) => {
      console.log(event);

      this.toggle = !this.toggle;
      // emit 함수는 next 함수에 구 버전이다.
      this.clicks.emit(this.toggle ? true : false);
    });
  }

}
