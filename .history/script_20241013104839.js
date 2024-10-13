const inputfield = document.querySelector('#password');
const outfield = document.querySelector('#output');


inputfield.addEventListener('input',function(){

    let password = inputfield.ariaValueMax;

    if(password.length<8){
        outfield.innerText  = 'Password is too short';

    }else{
        outfield
    }
})