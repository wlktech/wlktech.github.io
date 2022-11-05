//Promise OBj
//Synchronous VS Asynchronous
function one(){
    let result = 0;
    for(let i = 0; i<10; i++){
        result += i;
    }
    return result;
}

function two(){
    console.log("I am two function");
}

let res = one();
console.log(res);
two();
//Synchronous Step by step

function three(){
    console.log("Hello I am Three");
}
new Promise(function(resolve){
    let val = three();
}).then(function(value){
    console.log(value);
})
three();
