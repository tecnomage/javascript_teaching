//const arrow = (...x) => (total)=> x.reduce((acc,atual)=>acc+=atual+total);
//const arrow = (...x) => (total)=> x.reduce((acc,atual)=>acc+=atual+total);
arrow = f => (x => f(x));
arrow(console.log)(2);

//console.log(arrow(5,4));

