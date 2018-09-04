var teste = function(){
    var conta=0;     
    
    function soma(valor){
        conta+=valor;
    }

    function zera (){
        conta = 0;
    }

    return {
        sum:function(){
            soma(5);
        },
        tiraum: function(){
            soma(-1);
        },
        zera: function(){
            zera();
        },
        valor: function(){
            return conta;
        }
        
    }
       };

var nume = teste();
//nume.soma();


nume.sum();
nume.sum();
nume.tiraum();
console.log(nume.valor());
nume.tiraum();
console.log(nume.valor());
nume.zera();
console.log(nume.valor());


   