let form = document.getElementById('form');
        let name = document.myForm.name.value;
        let password = document.myForm.password.value;
        let password1 = document.myForm.password1.value;

        form.addEventListener('submit', function(){
            if(name == ""|| password == "" || password1 == ""){
                document.getElementById('name').style.border='1px solid red';
                document.getElementById('password').style.border='1px solid red';
                document.getElementById('password1').style.border='1px solid red';
            }
            
        })
        function submit(){
            
        }
        