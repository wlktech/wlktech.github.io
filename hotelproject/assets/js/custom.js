$(document).ready(function () {
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-angle-left left_arrow">',
        nextArrow: '<i class="fas fa-angle-right right_arrow">',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
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
    $('#pb50').show();
    $('#pg50').hide();
    $('#pr50').hide();
    $("#pColor0").click(function() {
      // Change src attribute of image
      $("#p1").attr("src", "./assets/img/promo1.jpg");
      $('.pcolor').text('Black');
      $('#pb50').show();
      $('#pg50').hide();
      $('#pr50').hide();
    });
    $("#pColor1").click(function() {
      // Change src attribute of image
      $("#p1").attr("src", "./assets/img/pb.jpg");
      $('.pcolor').text('Black');
      $('#pb50').show();
      $('#pg50').hide();
      $('#pr50').hide();
    });
    $("#pColor2").click(function() {
      // Change src attribute of image
      $("#p1").attr("src", "./assets/img/pg.jpg");
      $('.pcolor').text('Grey');
      $('#pb50').hide();
      $('#pg50').show();
      $('#pr50').hide();
    });
    $("#pColor3").click(function() {
      // Change src attribute of image
      $("#p1").attr("src", "./assets/img/pr.jpg");
      $('.pcolor').text('Red');
      $('#pb50').hide();
      $('#pg50').hide();
      $('#pr50').show();
    });


//wedge foam
$('#wb50').show();
$('#wg50').hide();
$('#wr50').hide();
$("#wColor0").click(function() {
  // Change src attribute of image
  $("#w1").attr("src", "./assets/img/promo2.jpg");
  $('.wcolor').text('Black');
  $('#wb50').show();
  $('#wg50').hide();
  $('#wr50').hide();
});
$("#wColor1").click(function() {
  // Change src attribute of image
  $("#w1").attr("src", "./assets/img/products/wedgered.jpg");
  $('.wcolor').text('Red');
  $('#wb50').hide();
  $('#wg50').hide();
  $('#wr50').show();
});
$("#wColor2").click(function() {
  // Change src attribute of image
  $("#w1").attr("src", "./assets/img/products/greywedge.jpg");
  $('.wcolor').text('Grey');
  $('#wb50').hide();
  $('#wg50').show();
  $('#wr50').hide();
});




//diffusor foam
$('#db50').show();
$('#dg50').hide();
$('#dr50').hide();

$("#dColor0").click(function() {
  // Change src attribute of image
  $("#d1").attr("src", "./assets/img/promo5.jpg");
  $('.dcolor').text('Black');
  $('#db50').show();
  $('#dg50').hide();
  $('#dr50').hide();
});
$("#dColor1").click(function() {
  // Change src attribute of image
  $("#d1").attr("src", "./assets/img/products/reddiffusor.jpg");
  $('.dcolor').text('Red');
  $('#db50').hide();
  $('#dg50').hide();
  $('#dr50').show();
});
$("#dColor2").click(function() {
  // Change src attribute of image
  $("#d1").attr("src", "./assets/img/products/greydiffusor.jpg");
  $('.dcolor').text('Grey');
  $('#db50').hide();
  $('#dg50').show();
  $('#dr50').hide();
});




//eggcrate foam
$("#eColor0").click(function() {
  // Change src attribute of image
  $("#e1").attr("src", "./assets/img/promo4.jpg");
});


//fabric black panel
  $('#fb60').show();
  $('#fb120').hide();
$("#fabric1").click(function() {
  // Change src attribute of image
  $("#f1").attr("src", "./assets/img/products/WE-08 Black.png");
  $('.fbsize').text('60x60x6cm');
  $("#price1").text("Ks30,000");
  $('#fb60').show();
  $('#fb120').hide();
});
$("#fabric2").click(function() {
  // Change src attribute of image
  $("#f1").attr("src", "./assets/img/products/fabricSize1.jpg");
  $('.fbsize').text('60x60x6cm');
  $("#price1").text("Ks30,000");
  $('#fb60').show();
  $('#fb120').hide();
});
$("#fabric3").click(function() {
  // Change src attribute of image
  $("#f1").attr("src", "./assets/img/products/fabricSize2.jpg");
  $('.fbsize').text('60x120x6cm');
  $("#price1").text("Ks60,000");
  $('#fb60').hide();
  $('#fb120').show();
});



//fabric dark grey panel
$('#fdg60').show();
$('#fdg120').hide();
$("#darkgrey0").click(function() {
  // Change src attribute of image
  $("#f2").attr("src", "./assets/img/products/Dark Grey.png");
  $("#price2").text("Ks30,000");
  $('.fbsize').text('60x60x6cm');
  $('#fdg60').show();
  $('#fdg120').hide();
});
$("#darkgrey1").click(function() {
  // Change src attribute of image
  $("#f2").attr("src", "./assets/img/products/fabricSize1.jpg");
  $("#price2").text("Ks30,000");
  $('.fbsize').text('60x60x6cm');
  $('#fdg60').show();
  $('#fdg120').hide();
});
$("#darkgrey2").click(function() {
  // Change src attribute of image
  $("#f2").attr("src", "./assets/img/products/fabricSize2.jpg");
  $("#price2").text("Ks60,000");
  $('.fbsize').text('60x120x6cm');
  $('#fdg60').hide();
  $('#fdg120').show();
});



//fabric light grey panel
$('#flg60').show();
$('#flg120').hide();
$("#lightgrey0").click(function() {
  // Change src attribute of image
  $("#f3").attr("src", "./assets/img/products/light grey.png");
  $("#price3").text("Ks30,000");
  $('.fbsize').text('60x60x6cm');
  $('#flg60').show();
  $('#flg120').hide();
});
$("#lightgrey1").click(function() {
  // Change src attribute of image
  $("#f3").attr("src", "./assets/img/products/fabricSize1.jpg");
  $("#price3").text("Ks30,000");
  $('.fbsize').text('60x60x6cm');
  $('#flg60').show();
  $('#flg120').hide();
});
$("#lightgrey2").click(function() {
  // Change src attribute of image
  $("#f3").attr("src", "./assets/img/products/fabricSize2.jpg");
  $("#price3").text("Ks60,000");
  $('.fbsize').text('60x120x6cm');
  $('#flg60').hide();
  $('#flg120').show();
});




//fabric beige panel
$('#fbg60').show();
$('#fbg120').hide();
$("#beige0").click(function() {
  // Change src attribute of image
  $("#f4").attr("src", "./assets/img/products/beige.png");
  $("#price4").text("Ks30,000");
  $('.fbsize').text('60x60x6cm');
  $('#fbg60').show();
  $('#fbg120').hide();
});
$("#beige1").click(function() {
  // Change src attribute of image
  $("#f4").attr("src", "./assets/img/products/fabricSize1.jpg");
  $("#price4").text("Ks30,000");
  $('.fbsize').text('60x60x6cm');
  $('#fbg60').show();
  $('#fbg120').hide();
});
$("#beige2").click(function() {
  // Change src attribute of image
  $("#f4").attr("src", "./assets/img/products/fabricSize2.jpg");
  $("#price4").text("Ks60,000");
  $('.fbsize').text('60x120x6cm');
  $('#fbg60').hide();
  $('#fbg120').show();
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

//Asking for delivery information
$("#deliInfo").hide('slow');
$("#buy").click(function(){
  $("#deliInfo").show('slow');
})



//AddToCart System Start
count();
$('.addToCart').click(function(e){
  e.preventDefault();
  let id = $(this).data('id');
  let name = $(this).data('name');
  let description = $(this).data('description');
  //changeColor
  // let description = $("input[type='radio']:checked").val();
  // alert(description)
  let price = $(this).data('price');
  console.log(id, name, description, price);

  //create an obj
  let items = {
      item_id : id,
      item_name : name, 
      item_description : description,
      item_price : price,
      qty : 1
  }

  //create localstorage
  let itemString = localStorage.getItem('shops');
  let itemArray;
  if(itemString == null){
      itemArray = [];
  }else{
      itemArray = JSON.parse(itemString);
  }

  //if item is same, qty will be plus 1.
  let status = false;
  $.each(itemArray, function(i, v){
      if(id == v.item_id){
          status = true;
          v.qty++;
      }
  })

  //if item is not same, another item will be added.
  if(status == false){
      //data place in array
      itemArray.push(items);
  }

  //convert data into string
  let itemData = JSON.stringify(itemArray);
  localStorage.setItem('shops', itemData);
  count();

})
//AddToCart System End

})