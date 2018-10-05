function teste(){
    return 'nome'
}


let obj = {
    foo: "bar",
    [ "baz" + teste() ]: 42
}

console.log(obj)
