const text = document.querySelector('.sec-text');
const textLoad = () =>{
    setTimeout(()=>{
        text.textContent = "Junior Developer.";
    },0);
    setTimeout(()=>{
        text.textContent = "React Developer.";
    },4000);
    setTimeout(()=>{
        text.textContent = "Laravel Developer.";
    },8000);
}
textLoad();
setInterval(textLoad, 12000)