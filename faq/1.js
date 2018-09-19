var animals = [0, {cnt:0}];


// slice() 메소드는 어떤 배열의 begin부터 
// end까지(end는 불포함)에 대한 shallow copy를 
// 새로운 배열 객체로 반환합니다. 
// 원본 배열은 수정되지 않습니다.
var x = animals.slice();
console.log(x == animals); // false
console.log(x === animals); // false
console.log();


// 원하는 대로 작동함
x[0]++;
console.log(animals); // [ 0, { cnt: 0 } ]
console.log(x); // [ 1, { cnt: 0 } ]
console.log();


// 원하는 대로 작동하지 않음
var x = animals.slice(); // 초기화
x[1].cnt++;
console.log(animals); // [ 0, { cnt: 1 } ]
console.log(x); // [ 0, { cnt: 1 } ]
console.log();


// Deep Copy Array with Objects
// 원하는 대로 작동함
var animals = [0, {cnt:0}]; // 초기화
var x = JSON.parse(JSON.stringify(animals));
x[1].cnt++;
console.log(animals); // [ 0, { cnt: 0 } ]
console.log(x); // [ 0, { cnt: 1 } ]

