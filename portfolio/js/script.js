var loader = document.getElementById('preloader');
window.addEventListener("load", function(){
  loader.style.display = "none";
})


var typed = new Typed(".auto-type", {
    strings: ["Junior Developer.", "React Developer.", "PHP Developer."],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);