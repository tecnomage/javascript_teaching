<<<<<<< HEAD
var multi = (...args)=>(n) => (m) => (n * m)(...args);


var mytest = multi('nome','teste')(2)(5);

console.log(mytest);
=======
const multi = (n) => (m) => fn => fn(n * m);
//let curry = multi(2)(3)(console.log);
multi(2)(3)(console.log);
>>>>>>> 99364e3a2f470558a67e663a78552749eff92dd6
