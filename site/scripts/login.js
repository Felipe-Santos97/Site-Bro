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
            mensagem.innerHTML = `<p>Muito bem <strong>${nome.value}</strong>, agora faça o login !</p>`
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
        if(email.value === '' && senha.value === ''){
            alert('Digite seus dados')
        }else if(email_cadastro.value == email.value && senha_cadastro.value == senha.value){
                msg_login.innerHTML = `<p>Conta logada com sucesso !</p>` 
                mensagem.innerHTML = `<p><strong>Obrigado ${nome.value} por se cadastrar, o sistema ainda esta em produção <br> e futuramente seus dados serão salvos.</strong></p>`
             }else{
                 alert('Usuario não cadastrado !')
             }          
        }
        // ESQUECEU A CONTA
        var esqueceu_conta = document.getElementById('esqueceu')
        esqueceu_conta.addEventListener('click', msg_recuperar)

        function msg_recuperar(){
            alert('Vishe, melhor fazer outra conta')
        }
