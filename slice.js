function testacalle(...nome){
    return nome + " foi";
  
}

function sliceMe(objeto){
    let teste;
    teste = Array.prototype.slice.call(objeto,2);
    console.log(teste);
    return teste;
}


function sayit(...nome){
    var teste=[];
    for(var i= 0; i<nome.length ; i++){
         teste.push(nome[i]); 
    }
    return teste;
}


let meusdados = {
    nome: 'vinicius',
    idade : 30,
    profissao: 'analista'
}

var numbers = [5, 6, 2, 3, 7];
var response = ["ant", "bison", 'camel', 'duck', 'elephant'];

var nomes = Object.isFrozen.apply(null,response);

var slice = sayit.apply(null,response);

let idade = sliceMe(meusdados);
console.log(idade);