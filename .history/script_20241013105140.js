const inputField = document.querySelector('#password');
const outField = document.querySelector('#output');


inputField.addEventListener('input',function(){

    let password = inputField.value;

    if(password.length<8){
        outield.innerText  = 'Password is too short';
        outfield.style.color= 'red';

    }else{
        outfield.innerText = 'Password is too long enough';
        outfield.style.color= 'green';

    }
});