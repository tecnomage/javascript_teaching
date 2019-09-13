factorial_no_names = (f => (n===1? 1 : n* f(f)(n-1)*(n-1)))


)
const n =[1,2,3,4,5,6,7,8,9,10,11].map(factorial_no_names)

console.log(n)