Y = f => (x => x(x))(x => f(y => x(x)(y)));

factorial_gen = f => n => (n === 0 ? 1 : n * f(n - 1));

console.log(Y(factorial_gen)(19));

//same principle
const n = x => x.toUpperCase();

arrow = f => (x => {return x +10;})(n => f(n(x)));



arrow(console.log)("2")(x => x.toUpperCase());
