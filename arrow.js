//const arrow = (...x) => (total)=> x.reduce((acc,atual)=>acc+=atual+total);
const arrow = (...x) => (total)=> x.reduce((acc,atual)=>acc+=atual+total);

var testeReduce = arrow(10,4,5,6)(20);
console.log(testeReduce);
//console.log(arrow(5,4));

