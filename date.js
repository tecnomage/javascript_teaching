var teste = '2018-12-5';

console.log(teste);

var mat = 12 - (1 % 2);

let data = new Date(...teste
    .split('-')
    .map(function (item, indice) {
        return item - indice % 2;
    }));

//let data2 = new Date();

console.log(data);

const items = [2, 3, 4];
const copy = [];

function teste2(obj) {
    console.log(obj+2, this.id + ' look telminha')
}

var item = {
    id: "cool"
}

items.forEach(teste2, item);

