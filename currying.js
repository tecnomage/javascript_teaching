const multi = (n) => (m) => fn => fn(n * m);
//let curry = multi(2)(3)(console.log);
multi(2)(3)(console.log);