for (var i=1; i<=5; i++) {
	(function(){
		setTimeout( function timer(){
			console.log( i );
		}, i*1000 );
	})();
}

// for (var i=1; i<=5; i++) {
// 	(function(){
// 		var j = i;
// 		setTimeout( function timer(){
// 			console.log( j );
// 		}, j*1000 );
// 	})();
// }

// for (var i=1; i<=5; i++) {
// 	(function(j){
// 		setTimeout( function timer(){
// 			console.log( j );
// 		}, j*1000 );
// 	})( i );
// }

  
  // var add5 = (function makeAdder(x) {
  //   return function(y) {
  //     return x + y;
  //   };
  // })(4);

// function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   };

//var add5 = makeAdder(5);

// console.log(add5(8));
  
  
  