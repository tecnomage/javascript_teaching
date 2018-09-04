function bar() {
    function foo() {
        console.log( a ); // 3  (not 2!)
    }
    var a = 3;
	foo();
}

var a = 2;

bar();