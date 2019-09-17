const why =
  fn =>
    (
      maker =>
        (...args) =>
          fn(maker(maker), ...args)
    )(
      maker =>
        (...args) =>
          fn(maker(maker), ...args)
    );

const exponent =
  why(
    (myself, x, n) => {
        console.log(myself.toString())
        console.log(x.toString())
        console.log(n.toString())
      if (n === 0) {
        return 1;
      } else if (n % 2 === 1) {
        return x * myself(x * x, Math.floor(n / 2));
      } else {
        return myself(x * x, n / 2);
      }
    }
  );

console.log(exponent(2, 9))


//Y = λf.(λx.f (x x)) (λx.f (x x))