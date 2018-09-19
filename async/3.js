/*
  제너레이터 함수는 로직을 수행하다가 중간 결과를
  리턴하고 다시 재수행할 수 있는 함수입니다.
*/
function* some(){
    yield 1;
    yield 2;
    yield 3;
    // return;
}

/*
    Iterator 구현: 제너레이터 함수를 호출하면
    이터러블 객체를 리턴합니다. 이터러블 객체는
    원래 객체[Symbol.iterator]()를 호출해야만
    이터레이터 객체를 리턴하는데,
    제너레이터가 리턴한 이터러블 객체는 편의상
    그대로 이터레이터처럼 사용할 수 있다.
    그래서, 기능이 더 있기 때문에 제너레이터라고 부른다.
 */
let generator = some();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

console.log('----------------');

generator = some();

/*
    Iterable 구현
 */
let iterable = generator[Symbol.iterator]();

console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

console.log('---------------');

/*
    Array implements Iterable
    배열은 이미 이터러블 객체로 행동할 수 있게 만들어져
    있다.
 */
let array = [4, 5, 6];

let iter = array[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
// { value: 4, done: false }
// { value: 5, done: false }
// { value: 6, done: false }
// { value: undefined, done: true }


