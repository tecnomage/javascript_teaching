function foo(a,b) {
	console.log( "a:" + a + ", b:" + b );
}

var meunome= 'teste';

// our DMZ empty object
var ø = Object.create( null );

var meuObj = { [meunome+ 'vini'] : 'nomezin'};

console.log(Object.getOwnPropertyDescriptor(meuObj, 'testevini'));

Object.seal(meuObj);

console.log(Object.getOwnPropertyDescriptor(meuObj, 'testevini'));

// spreading out array as parameters
foo.apply( ø, [2, 3] ); // a:2, b:3

var bar = foo.bind(null, 2);
bar(3);