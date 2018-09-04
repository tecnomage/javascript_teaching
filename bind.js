const halve = function(numero) {
        console.log(this.nome);
    return numero / 2;
};
let meuthis = {
    n: 40,
    nome: 'vinicius'
}

let mey = function(){
let n = 10;
let testeBind = halve.bind();
let testeCall = halve.call(meuthis,40);
console.log(testeBind(30));
console.log(testeCall);
//console.log(teste2);
// → 50
}

mey();