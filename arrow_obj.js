let cat = {
  nome: 'vinicius', 
  lives: 9,
  
  usavida : function(){
      this.lives--;
  }


};

const pulo = () => {
  //nao pega o this
    this.lives--;
};

function salto() {
  this.lives--;
}

function ola(){
    console.log('ola mu kiridu ' + this.nome)
}

const hello = () => {
    //nao pega o this
    console.log('ola mu kiridu ' + this.nome)
}


//const decrementa = salto.bind(cat);

const decrementa = cat.usavida.bind(cat);

const dizOi = ola.bind(cat)

dizOi();

decrementa();
decrementa();

console.log(cat.lives);
// console.log(cat.lives);

// const catdecrementa = catThis.bind(cat);

// catdecrementa();

// console.log(cat.lives);


//.jump();
//console.log(teste.lives)
//cat.jumps.bind(this.cat)
//teste();

// var decre = teste.bind(this)
// decre();
// decre();

