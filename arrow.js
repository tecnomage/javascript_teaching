//const arrow = (...x) => (total)=> x.reduce((acc,atual)=>acc+=atual+total);
//const arrow = (...x) => (total)=> x.reduce((acc,atual)=>acc+=atual+total);
arrow = f => ((x,n) => f(x*n));
arrow(console.log)(2,3);

//console.log(arrow(5,4));


