function retorna(num) {
  var num_somado = num + 10;
 
  return function novo_numero() {
    return num_somado + 10;
  };
}

var nova_funcao = retorna(10);

console.log((nova_funcao()));
//console.log(retorna(10)());
