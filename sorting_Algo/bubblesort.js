(   
    function bubbleSort(array) {
      console.log(array)
    for (let index = 0; index < array.length-1 ; index++) {
         const element = array[index];
    for (let j = array.length-1 ; j > index; j--) {
        //console.log(array[j])
        // if(array[index]> array[j]){
        //     let temp=array[index];
        //     array[index]= array[j]
        //     array[j]= temp;
        // }

        if(array[j-1]> array[j]){
              let temp=array[j-1];
              array[j-1]= array[j]
              array[j]= temp;
          }
      
    }
    console.log(array)
  }
})([3,10,6,5,4,9,2,12,34,19])
