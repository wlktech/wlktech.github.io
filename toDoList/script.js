$(document).ready(function(){
    $('#input').change(function(){
        var input = $(this).val();
        $('ul').append('<li>'+ input +'<i class="fas fa-check float-end"></i><i class="fas fa-trash float-end"></i></li>');
        $('this').val('');
    })
    $('ul').on('click', '.fa-trash', function(){
        $(this).parent('li').fadeOut(200);
    })
    $('ul').on('click', '.fa-check', function(){
        $(this).parent('li').toggleClass('checked');
    })
})