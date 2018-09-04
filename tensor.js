function redux(nome){
    redux.prototype.nome = nome;
   // console.log("meu nome é " + nome);
}
redux.prototype = {};

redux.prototype.tensor = function(){
    console.log('tensionando');
}

redux.prototype.tensor = function(){
    return this.montar+ " " + this.nome;
}


var a1 = function(){
       redux.call(this,'vinicius');

} 

//Criando o prototype e atribuindo um novo YouDontKnowJS
a1.prototype = Object.create(Object.prototype);
Object.setPrototypeOf(a1.prototype, redux.prototype);

a1.montar= 'meu nome';


// Object.defineProperty(redux.prototype, "tensor", {
    
//         enumerable: false,
//         writable: true,
//         configurable: true,
//         value: function(){
//             return this.montar + '  uhul';    // point `.constructor` at `Foo`
//         }
// });

a1.prototype.tensor = function(){
            return this.montar;
}

console.log(a1.prototype === redux.prototype);
console.log(a1.tensor());