//Initialize for JQuery
//JQuery Selector
$("#id") //id selector
$(".class") //class selector
$("p") //Element/Tag Selector


//1st Method
$(document).ready(function(){
    $("#btn").click(function(){
        $("#header").hide();
    })
})

//2nd Method and Common Method
$(function(){
    $("#btn").click(function(){
        $("#header").hide();
    })
})
//-------------------------------------------------------
//Events and function codes
$("#btn").click(function(){
    $("header").hide();
    $("header").show();
    $("header").fadeIn();
    $("header").fadeOut();
    $("header").slideUp();
    $("header").slideDown();
    $("header").slideToggle();
})
//1st Method
$("#btn").mouseenter(function(){
    $("#header").hide();
})
$("#btn").mouseleave(function(){
    $("#header").show();
})
//2nd Method "on method"
$("#btn").on({
    mouseenter : function(){
        $("#header").hide();
    },
    mouseleave : function(){
        $("#header").show();
    },
    click : function(){
        $("#header").slideUp();
    }
})
//-------------------------------------------------------
//CSS for JQuery
//for Single CSS Codes
$("#btn").click(function(){
    $("#header").css('background-color', 'red');
})
//for Multiple CSS Codes
$("#btn").click(function(){
    $("#header").css({
        'background-color':'red',
        'color' : 'white'
    })
})

//-------------------------------------------------------
//Set & Get Content
//make two inputs with two different id like #length, #breadth
$("#btn").click(function(){
    $("#length").val()
})
//-------------------------------------------------------
//append / prepend
$("#header").append("H2"); //from back
$("#header").prepend("H2") //from front
