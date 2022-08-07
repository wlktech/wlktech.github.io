function sumValue(){
    let num1, num2, result;
    num1 = Number(document.myForm.txtnum1.value);
    num2 = Number(document.myForm.txtnum2.value);
    unit = document.myForm.unit.value;
    result = (num1 * num2 ) + unit;
    // document.getElementById("answer")= result;
    document.myForm.txtresult.value = result;
    console.log(result);
}