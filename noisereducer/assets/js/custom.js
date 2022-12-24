$(document).ready(function () {
    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
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

      $('#all').click(function(){
        $('.foam').show('slow');
        $('.fabric').show('slow');
        $('.polyester').show('slow');
        $('.diffusor').show('slow');

        $('#all').addClass('active');
        $('#foam').removeClass('active');
        $('#fabric').removeClass('active');
        $('#polyester').removeClass('active');
        $('#diffusor').removeClass('active');
    })
    $('#foam').click(function(){
        $('.foam').show('slow');
        $('.fabric').hide('slow');
        $('.polyester').hide('slow');
        $('.diffusor').hide('slow');

        $('#all').removeClass('active');
        $('#foam').addClass('active');
        $('#fabric').removeClass('active');
        $('#polyester').removeClass('active');
        $('#diffusor').removeClass('active');
    })
    $('#fabric').click(function(){
        $('.foam').hide('slow');
        $('.fabric').show('slow');
        $('.polyester').hide('slow');
        $('.diffusor').hide('slow');

        $('#all').removeClass('active');
        $('#foam').removeClass('active');
        $('#fabric').addClass('active');
        $('#polyester').removeClass('active');
        $('#diffusor').removeClass('active');
    })
    $('#polyester').click(function(){
        $('.foam').hide('slow');
        $('.fabric').hide('slow');
        $('.polyester').show('slow');
        $('.diffusor').hide('slow');

        $('#all').removeClass('active');
        $('#foam').removeClass('active');
        $('#fabric').removeClass('active');
        $('#polyester').addClass('active');
        $('#diffusor').removeClass('active');
    })
    $('#diffusor').click(function(){
        $('.foam').hide('slow');
        $('.fabric').hide('slow');
        $('.polyester').hide('slow');
        $('.diffusor').show('slow');

        $('#all').removeClass('active');
        $('#foam').removeClass('active');
        $('#fabric').removeClass('active');
        $('#polyester').removeClass('active');
        $('#diffusor').addClass('active');
    })
    

//pyramid foam
    $("#pColor0").click(function() {
      // Change src attribute of image
      $("#p1").attr("src", "./assets/img/promo1.jpg");
    });
    $("#pColor1").click(function() {
      // Change src attribute of image
      $("#p1").attr("src", "./assets/img/pb.jpg");
    });
    $("#pColor2").click(function() {
      // Change src attribute of image
      $("#p1").attr("src", "./assets/img/pr.jpg");
    });
    $("#pColor3").click(function() {
      // Change src attribute of image
      $("#p1").attr("src", "./assets/img/pg.jpg");
    });


//wedge foam
$("#wColor0").click(function() {
  // Change src attribute of image
  $("#w1").attr("src", "./assets/img/promo2.jpg");
});
$("#wColor1").click(function() {
  // Change src attribute of image
  $("#w1").attr("src", "./assets/img/pb.jpg");
});
$("#wColor2").click(function() {
  // Change src attribute of image
  $("#w1").attr("src", "./assets/img/pr.jpg");
});
$("#wColor3").click(function() {
  // Change src attribute of image
  $("#w1").attr("src", "./assets/img/pg.jpg");
});

//diffusor foam
$("#dColor0").click(function() {
  // Change src attribute of image
  $("#d1").attr("src", "./assets/img/promo2.jpg");
});
$("#dColor1").click(function() {
  // Change src attribute of image
  $("#d1").attr("src", "./assets/img/pb.jpg");
});
$("#dColor2").click(function() {
  // Change src attribute of image
  $("#d1").attr("src", "./assets/img/pr.jpg");
});
$("#dColor3").click(function() {
  // Change src attribute of image
  $("#d1").attr("src", "./assets/img/pg.jpg");
});

//eggcrate foam
$("#eColor0").click(function() {
  // Change src attribute of image
  $("#e1").attr("src", "./assets/img/promo2.jpg");
});
$("#eColor1").click(function() {
  // Change src attribute of image
  $("#e1").attr("src", "./assets/img/pb.jpg");
});
$("#eColor2").click(function() {
  // Change src attribute of image
  $("#e1").attr("src", "./assets/img/pr.jpg");
});
$("#eColor3").click(function() {
  // Change src attribute of image
  $("#e1").attr("src", "./assets/img/pg.jpg");
});

//fabric foam
$("#fColor0").click(function() {
  // Change src attribute of image
  $("#f1").attr("src", "./assets/img/products/WE-08 Black.png");
});
$("#fColor1").click(function() {
  // Change src attribute of image
  $("#f1").attr("src", "./assets/img/pb.jpg");
});
$("#fColor2").click(function() {
  // Change src attribute of image
  $("#f1").attr("src", "./assets/img/pr.jpg");
});









});