const inputField = document.querySelector('#password');
const outField = document.querySelector('#output');


inputField.addEventListener('input',function(){

    let password = inputField.value;

    if(password.length<8){
        outField.innerText  = 'Password is too short';
        outield.style.color= 'red';

    }else{
        outfield.innerText = 'Password is too long enough';
        outfield.style.color= 'green';

    }
});