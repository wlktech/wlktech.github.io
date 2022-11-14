const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

form.addEventListener('submit', e=>{
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = ()=>{
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password1Value = password1.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username is required');
    }else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    }else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    }else if(passwordValue.length<8){
        setError(password, 'Password must be at least 8 characters.');
    }else{
        setSuccess(password);
    }

    if(password1Value === ''){
        setError(password1, 'Please confirm your password');
    }else if(password1Value !== passwordValue){
        setError(password1, 'Passwords does not match.');
    }else{
        setSuccess(password1);
    }
}    