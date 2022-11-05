//variable 
// x => Variable Name 
// var => keyword
// { } => Code Block 

var name = 'Mg Mg';
var name1 = 'Kyaw Kyaw';

var x = 10; //Declare //Assign
var y = 20;
x = 30; //Reassign
y = 40;
var z = x + y;
console.log(x," + ", y , " = ", z);
console.log(name);
console.log(name1);

//let => Block Scope Variable
// { } => Code Block
let a = 10; //Declare //Assign
let b = 20;

a = 50; //Reassign
b = 100;

let c = a + b;
console.log(c);


//const => Constant Variable
const d = 10; //Declare constant
const e = 50;
//d = 20; Reassign, then error occur.
const f = d + e;
console.log(f);
