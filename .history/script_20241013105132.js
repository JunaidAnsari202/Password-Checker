const inputField = document.querySelector('#password');
const outField = document.querySelector('#output');


inputField.addEventListener('input',function(){

    let password = inputField.va;

    if(password.length<8){
        outfield.innerText  = 'Password is too short';
        outfield.style.color= 'red';

    }else{
        outfield.innerText = 'Password is too long enough';
        outfield.style.color= 'green';

    }
});