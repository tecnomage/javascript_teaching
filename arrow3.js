var sum = function sum(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
};
console.log(sum(1)(5)(6));

const sum3 = x => y => z => x + y + z;
console.log(sum3(1)(5)(6));

const sum2 = (x, y, z) => x + y + z;
console.log(sum2(1, 5, 6));
