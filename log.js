// y = x^n ==== n = logx = y

// (function mmc(number) {
//   let number_total = number;
//   let divisor = 2;

//   while (number_total > 1) {
//     if (number_total % divisor == 0) {
//       number_total = number_total / divisor;
//       divisor++;
//     }
//     divisor++;

//   }
//   console.log(number_total);
//   console.log(divisor);
// })(7);

// y = x^n === n = logx = y
(function logn(base,logaritmando) {
  let index =1
    
  //for (let index = 1; base ** index  !== logaritmando; index++) {
    while(base ** index  !== logaritmando) {
      index++;
   console.log(logaritmando ** index)
    if (base ** index===logaritmando) {
        console.log(index)
        return index;
    }
  }
  // base
  // logaritimando
})(2,16);
//(2,36,4)
