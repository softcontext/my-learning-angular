import { Component, OnInit } from '@angular/core';

// ng g c customDirective -t -s --spec false
// -t : template(HTML) 파일을 만들지 않는다.
// -s : style(CSS) 파일을 만들지 않는다.
// --spec false : spec.ts(Test) 파일을 만들지 않는다.

@Component({
  selector: 'app-custom-directive',
  template: `
  <h1>Welcome</h1>
  <h1 myHidden>Hidden Welcome</h1>

  <br><br>

  <div>
   <input type="text" placeholder="name">
  </div>
  <br>
  <div>
   <input type="email" placeholder="email" myHighlight>
  </div>
  <br>
  <div>
   <input type="tel" placeholder="tel" myHighlight>
  </div>
  `,
  styles: []
})
export class CustomDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
