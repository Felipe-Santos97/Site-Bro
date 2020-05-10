// PARTE DO LOGIN

var email = document.querySelector('#email')
var btn = document.querySelector('#btn-login')
btn.addEventListener('click', login)

function login(){  
         window.alert('Usuario não encontrado, Faça o cadrastro !')
    
}


// PARTE DO CADRASTRO

var txt_nome = document.querySelector('#nome')
var btn_cadastro = document.querySelector('#btn-cadastro')

btn_cadastro.addEventListener('click' , cadastrar)

function cadastrar(){
    window.alert(nome.value)
}