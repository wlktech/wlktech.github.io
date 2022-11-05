function plus(){
    a = 10;
    b = 20;
    c = a + b;
    console.log(c);
}
plus();

function arg(x, y){ //Parameters
    c = x + y;
    console.log(c);
}
arg(50, 30); //Arguments

function arg1(x, y=5){ //Parameters
    c = x + y;
    // console.log(c);
    console.log("HELLO WORLD");
    return c;
}
let result = arg1(50); //Arguments
console.log(result); //no more code working after return.

//Annonymous Function
let func = function(){
    console.log("WELCOME");
}
func()

let ans = function one(){
    console.log("I am one function");
}
ans();

function two(func){
    func();
}
two(one);