function woodTonCal(){
    let width = document.woodCal.width.value;
    console.log(width);
    let height = document.woodCal.height.value;
    console.log(height);
    let length = 7200/(width*height);
    console.log(length);
    document.woodCal.length.value = length+" Rft";
}

function woodTon(){
    let width = document.tonCal.width.value;
    console.log(width);
    let height = document.tonCal.height.value;
    console.log(height);
    let length = document.tonCal.length.value;
    console.log(length);
    let nos = document.tonCal.nos.value;
    console.log(nos);
    let result = (width*height*length*nos)/7200;
    console.log(result);
    document.tonCal.result.value = result+" Ton";

}