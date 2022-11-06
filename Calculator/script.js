var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++){
    number[i].addEventListener('click', function(){
        // console.log(this.id);
        var output = document.getElementById('output_value').innerText;
        document.getElementById("output_value").innerText = output + this.id;
    })
}

var operator = document.getElementsByClassName('operator');
for(var i = 0; i < operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id == "clear"){
            document.getElementById("output_value").innerText = "";
            document.getElementById('history_value').innerText = "";
        }
        else if(this.id == "backspace"){
            var out = document.getElementById('output_value').innerText;
            var result = out.substr(0,out.length -1);
            document.getElementById('output_value').innerText = result;
            
        }
        else{
            if(this.id == "="){
                var out = document.getElementById("output_value").innerText;
                var history = document.getElementById("history_value").innerText;
                document.getElementById("history_value").innerText = history+out;
                var value = eval(history+out);
                document.getElementById("output_value").innerText = value;
            }else{
                var out = document.getElementById("output_value").innerText;
                document.getElementById("history_value").innerText = out + this.id;
                document.getElementById("output_value").innerText = "";
            }
            
        }
    })
}