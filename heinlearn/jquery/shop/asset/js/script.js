$(document).ready(function () {
    $('#all').click(function(){
        $('.headphone').show('slow');
        $('.earphone').show('slow');
        $('.soundbox').show('slow');
        $('.laptophandbag').show('slow');

        $('#all').addClass('active');
        $('#headphone').removeClass('active');
        $('#earphone').removeClass('active');
        $('#soundbox').removeClass('active');
        $('#laptophandbag').removeClass('active');
    })
    $('#headphone').click(function(){
        $('.headphone').show('slow');
        $('.earphone').hide('slow');
        $('.soundbox').hide('slow');
        $('.laptophandbag').hide('slow');

        $('#all').removeClass('active');
        $('#headphone').addClass('active');
        $('#earphone').removeClass('active');
        $('#soundbox').removeClass('active');
        $('#laptophandbag').removeClass('active');
    })
    $('#earphone').click(function(){
        $('.headphone').hide('slow');
        $('.earphone').show('slow');
        $('.soundbox').hide('slow');
        $('.laptophandbag').hide('slow');

        $('#all').removeClass('active');
        $('#headphone').removeClass('active');
        $('#earphone').addClass('active');
        $('#soundbox').removeClass('active');
        $('#laptophandbag').removeClass('active');
    })
    $('#soundbox').click(function(){
        $('.headphone').hide('slow');
        $('.earphone').hide('slow');
        $('.soundbox').show('slow');
        $('.laptophandbag').hide('slow');

        $('#all').removeClass('active');
        $('#headphone').removeClass('active');
        $('#earphone').removeClass('active');
        $('#soundbox').addClass('active');
        $('#laptophandbag').removeClass('active');
    })
    $('#laptophandbag').click(function(){
        $('.headphone').hide('slow');
        $('.earphone').hide('slow');
        $('.soundbox').hide('slow');
        $('.laptophandbag').show('slow');

        $('#all').removeClass('active');
        $('#headphone').removeClass('active');
        $('#earphone').removeClass('active');
        $('#soundbox').removeClass('active');
        $('#laptophandbag').addClass('active');
    })

    num1 = $('#num1').html(0);
    $('.minus1').click(function(){
        $.each()
    })
    
});
