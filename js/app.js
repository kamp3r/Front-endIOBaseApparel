
const form = document.querySelector('.formEmail');
const campoEmail = document.querySelector('.emailInput');
const button = document.querySelector('button');

function mostrarError(){
    campoEmail.classList.add('errorIcono')
    form.classList.add('error');
}

button.addEventListener('click', function(e){
    e.preventDefault();
    let email = campoEmail.value;
    if (validarEmail(email)){
        console.log('Email Enviado')
    }else{
        mostrarError()
    }
})

function validarEmail(email){
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLocaleLowerCase())
}