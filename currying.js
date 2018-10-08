var multi = (...args)=>(n) => (m) => (n * m)(...args);


var mytest = multi('nome','teste')(2)(5);

console.log(mytest);
