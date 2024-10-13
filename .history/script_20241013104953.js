const inputfield = document.querySelector('#password');
const outfield = document.querySelector('#output');


inputfield.addEventListener('input',function(){

    let password = inputfield.ariaValueMax;

    if(password.length<8){
        outfield.innerText  = 'Password is too short';
        outfield.style

    }else{
        outfield.innerText = 'Password is too long enough'
    }
});