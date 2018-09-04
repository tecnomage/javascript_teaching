var matrix = [1,2,3,4,5,6,7]

var reducao = matrix.reduce((acc,atual)=> {return acc+atual});

console.log(reducao);


var mapfunc = matrix.map((numero)=>{return numero +10});

console.log(mapfunc);

var f1=(num)=>{
    var a =num *num;
    console.log(a);
    return a;
    };

 

var f2 = f1(11);
console.log(f2);

//console.log(f2);





