let learn = (...functions) => functions.reduceRight(
    (composition, fn) => fn(composition)
    ,num)

let funcoes = (...f) => f.map(x => console.log(x));


let num = [1,2,4];
let map = x => x.map((n)=>n+1)
let reduce = x => x.reduce((acc,atual)=>acc+=atual)
let meuconsole = x=>console.log(x)


const resultado = learn(meuconsole,reduce,map);



