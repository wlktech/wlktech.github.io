$(document).ready(function () {
  
    var navbar = $('#navbar');
    $(window).scroll(function(){
        if($(window).scrollTop() <=30){
            navbar.slideDown('slow');
        }else{
            navbar.slideUp('slow');
        }
    })

    $(".hoverEffect").hover(function(){
      $('.dropdown-menu').show('slow');
      }, function(){
      $('.dropdown-menu').hide('slow');
    });

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-angle-left left_arrow">',
        nextArrow: '<i class="fas fa-angle-right right_arrow">',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    
    //sidebar
    $('#all').click(function(){
      $('.puma').show('slow');
      $('.gucci').show('slow');
      $('.adidas').show('slow');
      $('#all').addClass('active');
      $('#puma').removeClass('active');
      $('#gucci').removeClass('active');
      $('#adidas').removeClass('active');
    })
    $('#puma').click(function(){
      $('.puma').show('slow');
      $('.gucci').hide('slow');
      $('.adidas').hide('slow');
      $('#all').removeClass('active');
      $('#puma').addClass('active');
      $('#gucci').removeClass('active');
      $('#adidas').removeClass('active');
    })
    $('#gucci').click(function(){
      $('.puma').hide('slow');
      $('.gucci').show('slow');
      $('.adidas').hide('slow');
      $('#all').removeClass('active');
      $('#puma').removeClass('active');
      $('#gucci').addClass('active');
      $('#adidas').removeClass('active');
    })
    $('#adidas').click(function(){
      $('.puma').hide('slow');
      $('.gucci').hide('slow');
      $('.adidas').show('slow');
      $('#all').removeClass('active');
      $('#puma').removeClass('active');
      $('#gucci').removeClass('active');
      $('#adidas').addClass('active');
    })
});

