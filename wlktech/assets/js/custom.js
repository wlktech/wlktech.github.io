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

	var zoomin = document.querySelectorAll(".zoomin");
          
    for (var i = 0; i < zoomin.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = zoomin[i].getBoundingClientRect().top;
    var elementVisible = 150;
          
    if (elementTop < windowHeight - elementVisible) {
        zoomin[i].classList.add("Zoomin");
    } else {
        zoomin[i].classList.remove("Zoomin");
        }
    }

	var leftin = document.querySelectorAll(".leftin");
          
    for (var i = 0; i < leftin.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = leftin[i].getBoundingClientRect().top;
        var elementVisible = 150;
          
    	if (elementTop < windowHeight - elementVisible) {
        leftin[i].classList.add("Leftin");
        } else {
        leftin[i].classList.remove("Leftin");
        }
    }
          

    var rightin = document.querySelectorAll(".rightin");
          
    for (var i = 0; i < rightin.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = rightin[i].getBoundingClientRect().top;
        var elementVisible = 150;
          
        if (elementTop < windowHeight - elementVisible) {
        	rightin[i].classList.add("Rightin");
        } else {
            rightin[i].classList.remove("Rightin");
        }
    }


  }
  
  window.addEventListener("scroll", reveal);