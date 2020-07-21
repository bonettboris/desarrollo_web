
//console.log('hola otra linea en js');
const menu = document.querySelector('.menu');
console.log(menu);
const burgerButton = document.querySelector('#burger-menu');
console.log(burgerButton);

burgerButton.addEventListener('click', hideShow);

function hideShow(){
    if(menu.classList.contains('is-active')){
         menu.classList.remove('is-active');
    }else{
         menu.classList.add('is-active');
    }
}

const ipad = window.matchMedia('screen and (max-width: 767px)');
console.log(ipad);
ipad.addListener(validation)

function validation(event){
    if (event.matches){
        burgerButton.addEventListener('click', hideShow);
    }else{
        burgerButton.removeEventListener('click', hideShow);
    }
}

validation(ipad);



