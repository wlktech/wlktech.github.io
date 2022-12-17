$(document).ready(function () {
    var navbar = $('#navbar');
    $(window).scroll(function(){
        if($(window).scrollTop() <=100){
            navbar.slideDown('slow');
        }else{
            navbar.slideUp('slow');
        }
    })

    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
});