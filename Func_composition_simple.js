const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);   

const g = n => n + 1;
const f = n => n * 2;
// replace `x => f(g(x))` with `compose(f, g)`
const h = compose(f, g);
const test = h(20)
console.log(test); //=> 42