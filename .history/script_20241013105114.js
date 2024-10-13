const inputField = document.querySelector('#password');
const outield = document.querySelector('#output');


inputfield.addEventListener('input',function(){

    let password = inputfield.ariaValueMax;

    if(password.length<8){
        outfield.innerText  = 'Password is too short';
        outfield.style.color= 'red';

    }else{
        outfield.innerText = 'Password is too long enough';
        outfield.style.color= 'green';

    }
});