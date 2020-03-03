function power(base, exponent) {
    if (exponent == 0) return 1;
    return base * power(base, exponent - 1);
  }

const rec = (b,e) => e==0 ? 1: b * rec(b,e-1);

let saida = rec(2,8);

console.log(saida);