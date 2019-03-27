function* greeter() {
  yield 'Hi';
  yield 'How are you?';
  yield 'Bye';
  yield 150;
}
const greet = greeter();
console.log(greet.next().value);
console.log(greet.next().done=true);
console.log(greet.next().value);

// 'Hi'
//console.log(greet.next().value);
// 'How are you?'
//console.log(greet.next().value);
// 'Bye'
//console.log(greet.next().value);
// undefined
//console.log(greet.next().value);
