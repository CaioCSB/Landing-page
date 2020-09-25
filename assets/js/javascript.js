$('.carouselExempleFade').carousel({
    interval: 1000
  })

let nome = document.querySelector('#nomeC')
let email = document.querySelector('#emailc')
let nomeOk = false
let emailOk = false


function validaNome() {
    let txtNome = document.querySelector('#nomeC')
    if(nome.value.length < 3 ) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = ''
        nomeOk = true
    }   
}

function validaEmail() {
    let txtEmail = document.querySelector('#emailC')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true) {
        alert ('Formulário enviado com sucesso')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}