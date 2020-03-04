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

const teste = x => compose(soma1(1), soma3, soma4);

let saida = teste();
console.log(saida)
