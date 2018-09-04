 function looseJsonParse(obj){
     return Function('"use strict";return (' + obj + ')')();
 }

 var c = '45+120';
 console.log(looseJsonParse(
    "{a:(4-2), b:("+c+")}"
 ))

function evalsubs(arg){
//return Function('"use strict";return (' + obj + ')')();
	return Function('return('+ arg +')')();
}

// "use strict";
//var a = '2+2';
var a = '2*3+8*45';


console.log(evalsubs(a));

var a = ()=> {return 2*2}

var b = a +2;
console.log(b);
//, b:function(){}, c:new Date()