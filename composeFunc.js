const compose = (...fns) => x =>
                fns.reduceRight((y, f) => f(y),x);


function soma1(x) {
  console.log(x);
  return x + 1;
}

function soma3(x) {
    console.log(x);
    return x + 3;
}

function soma4(x) {
 console.log(x)
  return x + 4;
}

const soma1C= n => n+1;
const soma3C= n => n+3;
const soma4C= n => n+4;

const teste =  compose(soma1, soma3, soma4);

console.log(teste(4))

//console.log(saida);
