function* interrogate(what){
  console.log('what =', what);
  const name = yield 'What is your name?';
  const color = yield 'What is your favorite color?';
  return `${name}'s favorite color is ${color}.`;
  // yield `${name}'s favorite color is ${color}.`;
  // return;
}

const iter = interrogate('first');

 // 처음에는 파라미터를 전달할 수 없다.
var cycle = iter.next();
console.log(cycle.value);

cycle = iter.next('Aaron');
console.log(cycle.value);

cycle = iter.next('blue');
console.log(cycle.value);