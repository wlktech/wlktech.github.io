let num1, num2, result;
num1 = Number(document.myForm.m.value);
console.log(num1);
num2 = Number(document.myForm.ft.value);
console.log(num2);
// unit = document.myForm.unit.value;
// console.log(unit);
// result = (num1 * num2 ) + unit;
// document.getElementById("answer")= result;
// document.myForm.txtresult.value = result;
// console.log(result);
document.myForm.m.value = num2/3.281;
document.myForm.ft.value = num1*3.281;
