function Redux(meunome){
    this.nome = meunome;
   
}

Redux.prototype = {};

Redux.prototype.tensor = function(){
    return this.nome + ' Redux';
}

function A1(outronome){
       Redux.call(this, outronome);
} 

A1.prototype.tensor = function(){
            return this.nome;
}

A1.prototype.mudanome = function () {
    this.nome = 'novo nome';
}

//Criando o prototype e atribuindo um novo YouDon
Object.setPrototypeOf(A1.prototype, Redux.prototype);

var r1 = new Redux('meu nome');
var b1 = new A1('vinicius');
b1.mudanome();


console.log(b1.prototype === Redux.prototype);
//console.log(b1.)
console.log(r1.tensor());
console.log(b1.tensor());
console.log(b1.prototype === r1.prototype);
console.log(b1.__proto__);

// Object.defineProperty(redux.prototype, "tensor", {
    
//     enumerable: false,
//     writable: true,
//     configurable: true,
//     value: function(){
//         return this.montar + '  uhul';    // point `.constructor` at `Foo`
//     }
// });

