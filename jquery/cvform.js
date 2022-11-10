$(function(){
    $("#submit").click(function(){
        let name = $("#name").val();
        let fname = $("#fname").val();
        let nrc = $("#nrc").val();
        let dob = $("#dob").val();
        let gender = $('input:radio[name=gender]:checked').val();
        let nation = $("#nation").val();
        let race = $("#race").val();
        let religious = $("#religious").val();
        let martial = $("#martial").val();
        let contact = $("#contact").val();
        let email = $("#email").val();
        let address = $("#address").val();
        let edu = $("#edu").val();
        let qualify = $("#qualify").val();
        let exp = $("#exp").val();
        let expected = $("#expected").val();
        $("#name").text(name);
        $("#fname").text(fname);
        $("#nrc").text(nrc);
        $("#dob").text(dob);
        $("#gender").text(gender);
        $("#nation").text(nation);
        $("#race").text(race);
        $("#religious").text(religious);
        $("#martial").text(martial);
        $("#contact").text(contact);
        $("#email").text(email);
        $("#address").text(address);
        $("#edu").text(edu);
        $("#qualify").text(qualify);
        $("#exp").text(exp);
        $("#expected").text(expected);
    })
})