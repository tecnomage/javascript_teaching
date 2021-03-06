//SETAR UMA IFEE para uma variavel faz ela receber o resultado da funcao, nao a funcao em si
const waterfall = (...functions) => (callback, ...args) =>
  functions.reduceRight(
    (composition, fn) => (...results) => fn(composition, ...results),
    callback
  )(...args);

const randInt = max => Math.floor(Math.random() * max)

const add5 = (callback, x) => {
<<<<<<< HEAD
    console.log(callback)
    setTimeout(callback, randInt(10), x + 5);
};
const mult3 = (callback, x) => {
    console.log(callback)
  setTimeout(callback, randInt(10), x * 3);
};
const sub2 = (callback, x) => {
    console.log(callback)
  setTimeout(callback, randInt(10), x - 2);
};
const split = (callback, x) => {
    console.log(callback)
  setTimeout(callback, randInt(10), x, x);
};
const add = (callback, x, y) => {
    console.log(callback)
    setTimeout(callback, randInt(10), x + y);
};
const div4 = (callback, x) => {
    console.log(callback)
  setTimeout(callback, randInt(10), x / 4);
=======
  console.log(x);
  setTimeout(callback, randInt(1000), x + 5);
};
const mult3 = (callback, x) => {
  setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) => {
  setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) => {
  setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) => {
  setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) => {
  console.log(x);
  setTimeout(callback, randInt(1000), x / 4);
>>>>>>> 99364e3a2f470558a67e663a78552749eff92dd6
};

const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log,5) // -> 14

// same as:

const computation2 = (input, callback) => {
  const f6 = x=> div4(callback, x);
  const f5 = (x, y) => add(f6, x, y);
  const f4 = x => split(f5, x);
  const f3 = x => sub2(f4, x);
  const f2 = x => mult3(f3, x);
  add5(f2, input);
}