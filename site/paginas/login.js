
// PARTE DO CADRASTRO

// pegando os campos
var mensagem = document.querySelector('#cadastro')
var nome = document.querySelector('#nome')
var senha_cadastro = document.querySelector('#senha-cad')
var email_cadastro = document.querySelector('#email-cad')
var btn_cadastro = document.querySelector('#btn-cadastro')

btn_cadastro.addEventListener('click' , cadastrar)

function cadastrar(){
        if(email_cadastro.value !== '' && nome.value !== '' && senha_cadastro.value !== ''){
            mensagem.innerHTML = `<p>Obrigado <strong>${nome.value}</strong> por se cadastrar.</p>`
        }else{
            window.alert('Coloque seus dados !')
      }
}


// PARTE DO LOGIN
var msg_login = document.querySelector('#login')
var email = document.querySelector('#email')
var senha = document.querySelector('#senha')
var btn = document.querySelector('#btn-login')
btn.addEventListener('click', login)

function login(){  
        if(email.value !== '' && senha.value !== ''){
            alert('logado')
        }else{
            alert('nao logado')
        }
}