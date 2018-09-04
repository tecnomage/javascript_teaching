 
 function makeHelpCallback(valor){
console.log(valor);
 }
 
 
function closure(){
 for (var i = 0; i <= 5; i++) {
    //var item = helpText[i];
    //document.getElementById(item.id).onfocus = makeHelpCallback(i);
    var teste=(i)=>{
      {
        console.log(i);
      }
    }

    teste(i);
     
    console.log('chamando funcao');
    makeHelpCallback(i)
  }
}

closure();