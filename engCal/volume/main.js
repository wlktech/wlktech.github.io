function result1(){
    let length = document.myForm1.length.value;
    console.log(length);
    let breadth = document.myForm1.breadth.value;
    console.log(breadth);
    let height = document.myForm1.height.value;
    console.log(height);
    let unit = document.myForm1.unit.value;
    console.log(unit);
    document.write('<h1 align="center">Volume Calculation</h1>')
    document.write(`<h3 align="center">Volume Value: ${length*breadth*height} ${unit}</h3>`)
}
