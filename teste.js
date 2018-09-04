'use strict';

// function tete(a,b,a){
//   console.log("entrou na tete");
// }

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError
function tete2(a,b){
   // 'use strict';
    //console.log("entrou no strict");
  }

  //tete();
  //tete2();

  'use strict';
  var o = { p: 1, p: 2 };

 (function(){
	'use strict';
   	var a = {
		b: 42,
		b: 43
    };
    var a;
    // Error!
})();

var sum = 015 +
          197 ;

{
    c = 3;
    var c;
}