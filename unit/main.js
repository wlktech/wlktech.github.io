var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputType, resultType;

input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult(){
    inputTypeValue=inputType.value;
    resultTypeValue = resultType.value;
    
    if (inputTypeValue === "meter" && resultTypeValue === "kilometer"){
        //this is for meter to kilometer formula
        result.value = Number(input.value) * 0.001;
    }else if(inputTypeValue === "meter" && resultTypeValue === "centimeter"){
        //this is for meter to cetimeter formula
        result.value = Number(input.value) * 100;
    }else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
        //this is for meter to meter formula
        result.value = input.value;
    }

    if (inputTypeValue === "kilometer" && resultTypeValue === "meter"){
        //this is for kilometer to meter formula
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){
        //this is for kilometer to cetimeter formula
        result.value = Number(input.value) * 100000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
        //this is for kilometer to kilometer formula
        result.value = input.value;
    }

    if (inputTypeValue === "centimeter" && resultTypeValue === "meter"){
        //this is for centimeter to meter formula
        result.value = Number(input.value) * 0.01;
    }else if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
        //this is for centimeter to kilometer formula
        result.value = Number(input.value) / 100000;
    }else if(inputTypeValue === "centimeter" && resultTypeValue === "centimeter"){
        //this is for centimeter to centimeter formula
        result.value = input.value;
    }
    
}