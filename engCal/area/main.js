function result(){
    let length = document.myForm.length.value;
    console.log(length);
    let breadth = document.myForm.breadth.value;
    console.log(breadth);
    let unit = document.myForm.unit.value;
    console.log(unit);
    document.write('<h1 align="center">Area Calculation</h1>')
    document.write(`<h3 align="center">Area Value: ${length*breadth} ${unit}</h3>`)
}
