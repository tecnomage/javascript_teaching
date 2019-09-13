//const arrow = (...x) => (total)=> x.reduce((acc,atual)=>acc+=atual+total);
//const arrow = (...x) => (total)=> x.reduce((acc,atual)=>acc+=atual+total);
arrow = f => (x => f(x));

//novoconsole = n => console.log(n)

arrow(console.log)(2);

//console.log(arrow(5,4));

