function f1(x){
 return x.map(v => v+1);
  }

//var f1 = (x) => x + 1;

const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => {
        currentValue=f1(currentValue);
        return accumulator.concat(currentValue)
  });

console.log(array1);
// expected output: Array [4, 5, 2, 3, 0, 1]
