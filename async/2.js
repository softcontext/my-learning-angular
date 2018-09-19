// Iterable 규약:
// Symbol.iterator 인 예약어를 프로퍼티 키로 사용하여
// 함수를 지원해야 한다.
// 함수를 호출하면 처리결과로 이터레이터 객체를
// 리턴해야 합니다.
let objX = {
    array: [1, 2, 3],
    nextIndex: 0,
    [Symbol.iterator]: function(){
        return {
            array: this.array,
            nextIndex: this.nextIndex,
            next: function(){
                return this.nextIndex < this.array.length ?
                {value: this.array[this.nextIndex++], done: false} :
                {value: undefined, done: true};
            }
        }
    }
};

let iterable = objX[Symbol.iterator]();

console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

console.log('------------');

// 이터러블 객체는 for-of 구문을 
// 사용할 수 있다.
for (let val of objX) {
  console.log(val);
}




