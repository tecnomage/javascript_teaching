var cat = {
  lives: 9,
  jumps: () => {
     console.log('entrou')
    this.lives--;
  },
  jump : function(){
      this.lives--;
  }.bind(this)
}

// var catThis = cat.jumps;

// catThis();

// console.log(cat.lives);

// const catdecrementa = catThis.bind(cat);

// catdecrementa();

// console.log(cat.lives);

var teste = cat;
console.log(teste.lives)
//cat.jumps.bind(this.cat)
//teste();
teste.jumps();
teste.jumps();

// var decre = teste.bind(this)
// decre();
// decre();

console.log(teste.lives);


