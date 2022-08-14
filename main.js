function sendMail(params){
    var tempParams = {
        from_name:document.getElementById("fromName").value,
        to_name:document.getElementById("toName").value,
        message: document.getElementById("msg").value,
    };
    emailjs.send('gmail', 'template_62z767j', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}