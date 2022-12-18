var loader = document.getElementById('preloader');
window.addEventListener("load", function(){
  loader.style.display = "none";
})


var typed = new Typed(".auto-type", {
    strings: ["Junior Developer.", "PHP Developer.","Laravel Developer."],
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

//Age Calculator
  var dob = new Date("10/29/1997");  
  //calculate month difference from current date in time  
  var month_diff = Date.now() - dob.getTime();  
    
  //convert the calculated difference in date format  
  var age_dt = new Date(month_diff);   
    
  //extract year from date      
  var year = age_dt.getUTCFullYear();  
    
  //now calculate the age of the user  
  var age = Math.abs(year - 1970);  
    
  //display the calculated age  
  document.getElementById('age').innerHTML = age;
  // document.write("Age of the date entered: " + age + " years");  


//Input Validation
function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let message = document.forms["myForm"]["message"].value;
  if (name == "" || email =="" || message=="") {
    if(name==""){
      document.getElementById('name_warn').innerHTML = "*Name must be filled out";
    }if(email==""){
      document.getElementById('email_warn').innerHTML = "*Email must be filled out";
    }if(message==""){
      document.getElementById('message_warn').innerHTML = "*Comments must be filled out";
    }
    // alert("Name must be filled out");
    return false;
  }else{
    document.getElementById('success').innerHTML = "You have sent successfully!"
  }
}
