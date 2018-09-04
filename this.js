
	function foo() {
		console.log(this.a);
	
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`
	foo(fn)		
}

global.obj = {
	a: 2,
	b:foo
};


global.a = "oops, global"; // `a` also property on global object

doFoo(obj.b);

foo.call(global.obj);
