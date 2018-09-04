var person1 = {name: 'Marvin', age: 42, size: '2xM'};
var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

// var sayHello = function(){
//     alert('Hello, ' + this.name);
// };

// var sayGoodbye = function(){
//     alert('Goodbye, ' + this.name);
// };

var say = function(greeting){
    console.log(greeting + ', ' + this.name);
};

var update = function(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
};

var dispatch = function(person, method, args){
    method.apply(person, args);
};

dispatch(person1, say, ['Hello']);
dispatch(person2, update, ['Slarty', 200, '1xM']);
dispatch(person2,say,['bye']);