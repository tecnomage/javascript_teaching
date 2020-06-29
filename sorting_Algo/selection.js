(function selection(numbers) {
  //https://stackoverflow.com/questions/22898928/selection-sort-in-javascript
  for (let i = 0; i < numbers.length; i++) {
    let menor = i;
    for (let j = i; j < numbers.length; j++) {
      if (numbers[j] < numbers[menor]) {
        menor = j;
      }
      //console.log(j)
      if (numbers[i] > numbers[menor]) {
        //troca
        let temp = numbers[j];
        numbers[j] = numbers[i];
        numbers[i] = temp;
      } 
    }
  }
console.log(numbers)
})([3, 4, 8, 10, 20, 7, 6, 18, 17, 23]);
