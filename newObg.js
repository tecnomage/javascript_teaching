var myObject = {
      
    get A ()	{

   },
   
};

myObject.a=8; // 2

myObject.b = 5;

if(myObject.hasOwnProperty( "a" )){
    console.log('ok');
}

if("a" in myObject)
{
    // console.log("true")
}

var chaves = Object.keys(myObject);
console.log(chaves);
console.log(myObject.a);

myObject.a=20;

console.log(myObject.a);
