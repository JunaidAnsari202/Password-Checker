const inputField = document.querySelector('#password');
const outField = document.querySelector('#output');


inputField.addEventListener('input',function(){

    let password = inputField.value;

    if(password.length<8){
        outField.innerText  = 'Password is too short';
        outField.style.color= 'red';

    }else{
        outField.innerText = 'Password is too long enough';
        outField.style.color= 'green';
    
        if(password.search(/[a-z]/)== -1){
            outField.innerText="Password is missing a lowercase letter ";
            outField.style.color="red";
        }else if(password.search(/[A-Z]/)== -1){
            outField.innerText="Password is missing a uppercase letter ";
            outField.style.color="red";
        }else if(password.search(/[0-9]/)== -1){
            outField.innerText="Password is missing a numeric number ";
            outField.style.color="red";
        }else if(password.search(/[!\@\#\$\%\^\&\*]/)== -1){
            outField.innerText="Password is missing a special  ";
            outField.style.color="red";
        }
    }
});