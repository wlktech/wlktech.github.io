window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.row');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 3;
    if (contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});