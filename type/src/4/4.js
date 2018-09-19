/*
  1. constructor에서 this.color 라고 사용하기 전에
  클래스 밑으로 해당 프로퍼티를 멤버변수처럼
  선언해 놓고 사용해야 합니다.
  
  2. 대신, 생성자 파라미터 앞에 접근제어자를 붙이면
  멤버변수처럼 선언하지 않아도 됩니다.
*/
var Car2 = /** @class */ (function () {
    // color: string;
    function Car2(color) {
        if (color === void 0) { color = 'Red'; }
        this.color = color;
        // this.color = color;
    }
    Car2.prototype.print = function () {
        console.log(this.color);
    };
    return Car2;
}());
// private: 해당 변수는 Car2 클래스 안에서만
// 접근할 수 있다. (그렇게 써 주세요!)
var car2 = new Car2();
console.log(car2.color);
//# sourceMappingURL=4.js.map