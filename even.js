var nova = function iqTest(numbers){
  let even;
  numbers = [2,3,4,6,8]

  var isEven = (x => x % 2==0? true:false)
  
  console.log('is even:' + isEven(3));

  //usar FIlter?
  numbers.map(x => {
        even=isEven(x);
     })
     console.log(even);
}()