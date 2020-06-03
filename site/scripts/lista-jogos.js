var jogos = document.getElementById('jogos');
var jogoClaudio = document.getElementById('jogoClaudio');

jogos.addEventListener('click', listaJogos);
jogoClaudio.addEventListener('mouseout', fechar);

function listaJogos(){
    jogoClaudio.style.display="block";
}

function fechar(){
    jogoClaudio.style.display="none";
}