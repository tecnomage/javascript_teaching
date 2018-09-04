// const Cat = require("./legal.js");
//const Cat = require('./cat');
//var cat = new Cat();
// console.log(Cat.gato());
//console.log(cat.makeSound());

function getData() {
	// ..
	return {
		a: 42,
		b: "foo"
	};
}

var { a, b } = getData();

console.log( a, b ); // 42 "foo"

var res = getData();
var c = res.a
var d = res.b;