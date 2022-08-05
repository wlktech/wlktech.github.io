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
function result2(){
    let slength = document.myForm2.slength.value;
    console.log(slength);
    let sbreadth = document.myForm2.sbreadth.value;
    console.log(sbreadth);
    let mlength = document.myForm2.mlength.value;
    console.log(mlength);
    let mbreadth = document.myForm2.mbreadth.value;
    console.log(mbreadth);
    let siteArea = slength*sbreadth
    let materialArea = mlength*mbreadth

    document.write('<h1 align="center">Material Calculation</h1>')
    document.write(`<h3 align="center">Numbers of Material: ${siteArea/materialArea} nos</h3>`)
}