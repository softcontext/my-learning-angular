// Iterator 규약: 객체안에 next 함수가 있고
// 함수를 호출하면 다음 형태의 객체를 리턴하면 이터레이터라고 부른다.
let obj = {
    array: [1, 2, 3],
    nextIndex: 0,
    next: function(){
        return this.nextIndex < this.array.length ?
        {value: this.array[this.nextIndex++], done: false} :
        {value: undefined, done: true};
    }
};

console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }





