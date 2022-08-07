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
    let ans = (siteArea/materialArea)+" nos"
    console.log(ans);
    document.myForm2.ans.value = ans;


    // document.write('<h1 align="center">Material Calculation</h1>')
    // document.write(`<h3 align="center">Numbers of Material: ${siteArea/materialArea} nos</h3>`)
}