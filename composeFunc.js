//const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
//https://medium.com/front-end-weekly/javascript-es6-curry-functions-with-practical-examples-6ba2ced003b1
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));


function soma1(x) {
  console.log("ok");
  return x + 1;
}

function soma3(x) {
  return x + 3;
}

function soma4(x) {
  return x + 4;
}

const teste = x => compose(soma1, soma3, soma4(1));

let saida = teste();
console.log(saida)
