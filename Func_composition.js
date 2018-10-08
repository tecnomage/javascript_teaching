const users = [
  { name: "Jeff", age: 14 },
    { name: "Jack", age: 18 }, 
    { name: "Milady", age: 22 },
]
const filter = (cb, arr) => arr.filter(cb);
const map = (cb, arr) => arr.map(cb);

map(u => u.name, filter(u => u.age >= 18, users)); //["Jack", "Milady"]