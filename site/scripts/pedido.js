var nome = document.querySelector('#nome')
var hora = document.querySelector('#hora')
var marcar = document.querySelector('#marcar')
var resuldado = document.querySelector('#sessao')

marcar.addEventListener('click', marcarPedido)


function marcarPedido(){
    if(nome.value !== '' && hora.value !== ''){
        resuldado.innerHTML = `<p>O Pedido foi marcado <strong>${nome.value}</strong>.</p><br>`
        resuldado.innerHTML += `<p>Um email será enviado aos demais.</p>`
    }else{
        alert('Digite os dados !')
    }
}