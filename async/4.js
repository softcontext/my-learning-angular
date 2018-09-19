function* rainbow(){
  yield 'red';
  yield 'orange';
  yield 'yellow';
}

// 리턴하는 제너레이터 객체는 이터레이터 객체처럼
// 사용할 수 있으므로 이터레이터는 변수를 많이 사용한다.
const iter = rainbow();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

console.log('---------');

// of 다음은 이터러블 객체가 올 수 있습니다.
// 이터레이터.next() 함수 리턴결과가 
// done: true 일 때까지 반복합니다.
for (let color of rainbow()) {
  console.log(color);
}