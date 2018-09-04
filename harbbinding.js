function foo(el) {
	console.log( el, this.id );
}

function soma(num){
    console.log(2+num);
}

var obj = {
	id: "awesome"
};

// use `obj` as `this` for `foo(..)` calls
[1, 2, 3].forEach( foo, obj ); // 1 awesome  2 awesome  3 awesome
var nume = [2,4,5,6,7,8]

nume.forEach(soma);
