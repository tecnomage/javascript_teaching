const arrow = (...x)=> (total,acc) => x.reduce((acc,atual)=> acc+=atual
)
                  
                    
                       
//var testeReduce = arrow(5)(1);
console.log(arrow(5,4));



const waterfall = (...functions) => (callback, ...args) =>
    functions.reduceRight(
    (composition, fn) => 
    (...results) => fn(composition, ...results),
    callback
    )(...args);
