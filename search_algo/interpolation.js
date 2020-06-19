//number must be an array
(function interpolation(number, array) {
  //let mid =  (0 + (8 - 0)/( 10 - 1)) * (6-1)
  let tentativas = 0;
  let found = false;
  let low = 0;
  let high = array.length - 1;
  let position = Math.floor(
    low + ((high - low) / (array[high] - array[low])) * (number - array[low])
  );

  while (low < high && number >= array[low] && number <= array[high]) {
    if (array[position] == number) {
      console.log(`fizemos ${tentativas}`);
      return position;
    }
    if (array[position] < number) {
      low = position++;
    } else {
      high = position--;
    }
    tentativas++;
    console.log(tentativas);
  }

  number;
})(4, [1, 2, 3, 4, 6, 7, 8, 9, 10]);
//mid = low + (High - low)/(A[high] - A[Low]) * N - a[low]
