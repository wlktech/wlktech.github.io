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

//fabric black panel
$("#fabric1").click(function() {
  // Change src attribute of image
  $("#f1").attr("src", "./assets/img/products/WE-08 Black.png");
  $("#price1").text("Ks30,000");
});
$("#fabric2").click(function() {
  // Change src attribute of image
  $("#f1").attr("src", "./assets/img/products/fabricSize1.jpg");
  $("#price1").text("Ks30,000");
});
$("#fabric3").click(function() {
  // Change src attribute of image
  $("#f1").attr("src", "./assets/img/products/fabricSize2.jpg");
  $("#price1").text("Ks60,000");
});

//fabric dark grey panel
$("#darkgrey0").click(function() {
  // Change src attribute of image
  $("#f2").attr("src", "./assets/img/products/Dark Grey.png");
  $("#price2").text("Ks30,000");
});
$("#darkgrey1").click(function() {
  // Change src attribute of image
  $("#f2").attr("src", "./assets/img/products/fabricSize1.jpg");
  $("#price2").text("Ks30,000");
});
$("#darkgrey2").click(function() {
  // Change src attribute of image
  $("#f2").attr("src", "./assets/img/products/fabricSize2.jpg");
  $("#price2").text("Ks60,000");
});

//fabric light grey panel
$("#lightgrey0").click(function() {
  // Change src attribute of image
  $("#f3").attr("src", "./assets/img/products/light grey.png");
  $("#price3").text("Ks30,000");
});
$("#lightgrey1").click(function() {
  // Change src attribute of image
  $("#f3").attr("src", "./assets/img/products/fabricSize1.jpg");
  $("#price3").text("Ks30,000");
});
$("#lightgrey2").click(function() {
  // Change src attribute of image
  $("#f3").attr("src", "./assets/img/products/fabricSize2.jpg");
  $("#price3").text("Ks60,000");
});

//fabric beige panel
$("#beige0").click(function() {
  // Change src attribute of image
  $("#f4").attr("src", "./assets/img/products/beige.png");
  $("#price4").text("Ks30,000");
});
$("#beige1").click(function() {
  // Change src attribute of image
  $("#f4").attr("src", "./assets/img/products/fabricSize1.jpg");
  $("#price4").text("Ks30,000");
});
$("#beige2").click(function() {
  // Change src attribute of image
  $("#f4").attr("src", "./assets/img/products/fabricSize2.jpg");
  $("#price4").text("Ks60,000");
});


//Polyester Black panel
$("#pe10").click(function() {
  // Change src attribute of image
  $("#peb1").attr("src", "./assets/img/products/blackpoly.jpg");

});
$("#pe11").click(function() {
  // Change src attribute of image
  $("#peb1").attr("src", "./assets/img/products/hexagonBackground.jpg");

});
$("#pe12").click(function() {
  // Change src attribute of image
  $("#peb1").attr("src", "./assets/img/products/detailpoly.avif");

});

//Polyester Brown panel
$("#pe20").click(function() {
  // Change src attribute of image
  $("#pebr1").attr("src", "./assets/img/products/brownpoly.jpg");

});
$("#pe21").click(function() {
  // Change src attribute of image
  $("#pebr1").attr("src", "./assets/img/products/hexagonBackground.jpg");

});
$("#pe22").click(function() {
  // Change src attribute of image
  $("#pebr1").attr("src", "./assets/img/products/detailpoly.avif");

});

//Polyester Lightgrey panel
$("#pe30").click(function() {
  // Change src attribute of image
  $("#pelg1").attr("src", "./assets/img/products/lightgreypoly.jpg");

});
$("#pe31").click(function() {
  // Change src attribute of image
  $("#pelg1").attr("src", "./assets/img/products/hexagonBackground.jpg");

});
$("#pe32").click(function() {
  // Change src attribute of image
  $("#pelg1").attr("src", "./assets/img/products/detailpoly.avif");

});

//Polyester Red panel
$("#pe40").click(function() {
  // Change src attribute of image
  $("#per1").attr("src", "./assets/img/products/redpoly.jpg");

});
$("#pe41").click(function() {
  // Change src attribute of image
  $("#per1").attr("src", "./assets/img/products/hexagonBackground.jpg");

});
$("#pe42").click(function() {
  // Change src attribute of image
  $("#per1").attr("src", "./assets/img/products/detailpoly.avif");

});

//Wooden Diffusor panel
$("#w11").click(function() {
  // Change src attribute of image
  $("#w10").attr("src", "./assets/img/products/w1.jpg");

});
$("#w12").click(function() {
  // Change src attribute of image
  $("#w10").attr("src", "./assets/img/products/w2.1.png");

});

//Wooden Diffusor panel
$("#w21").click(function() {
  // Change src attribute of image
  $("#w20").attr("src", "./assets/img/products/w2.png");

});
$("#w22").click(function() {
  // Change src attribute of image
  $("#w20").attr("src", "./assets/img/products/w1.1.jpg");

});

//Wooden Diffusor panel
$("#w31").click(function() {
  // Change src attribute of image
  $("#w30").attr("src", "./assets/img/products/w5.jpg");

});
$("#w32").click(function() {
  // Change src attribute of image
  $("#w30").attr("src", "./assets/img/products/w5.1.jpg");

});
$("#w33").click(function() {
  // Change src attribute of image
  $("#w30").attr("src", "./assets/img/products/w5.2.webp");

});

//Wooden Diffusor panel
$("#w41").click(function() {
  // Change src attribute of image
  $("#w40").attr("src", "./assets/img/products/w6.jpg");

});
$("#w42").click(function() {
  // Change src attribute of image
  $("#w40").attr("src", "./assets/img/products/w6.1.webp");

});
$("#w43").click(function() {
  // Change src attribute of image
  $("#w40").attr("src", "./assets/img/products/w6.2.jpg");

});

});