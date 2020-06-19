//number must be an array
(function interpolation(number, array, low, high) {
  //let mid =  (0 + (8 - 0)/( 10 - 1)) * (6-1)
  console.log('inicio')
  //let tentativas = 0;
  let found = false;
  let position = Math.floor(
    low + ((high - low) / (array[high] - array[low])) * (number - array[low])
  );

  if ((low < high && number >= array[low]) && (number <= array[high])) {
    if (array[position] == number) {
      const indice = array.indexOf(number)
      console.log(`achamos na ${indice}`);
      return position;
    }
    if (array[position] < number) {
      low = position+1;
      console.log(low)
      console.log(position)
      interpolation(number,array,low,high)
          } else {
      console.log(high)
      high = position+1;
      interpolation(number,array,low,high)
    }
    tentativas++;
    console.log(tentativas);
  }

  number;
})(8, [1, 2, 3, 4, 6, 7, 8, 9, 10],0,[1, 2, 3, 4, 6, 7, 8, 9, 10].length-1);
//mid = low + (High - low)/(A[high] - A[Low]) * N - a[low]
