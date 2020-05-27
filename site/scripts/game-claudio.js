var msg = document.getElementById('msg');
var playAgain = document.getElementById('playAgain');
var claudio;
var tempo = 1;
var cliks = 0;
var frame;
var contole = 0;

document.addEventListener('keydown', iniciar);
playAgain.addEventListener('click', jogarDnovo)

 // FUNÇOES
 function iniciar(){
    if(contole == 0){
        playAgain.style.display = "none";
        msg.innerHTML = " ";
        claudio = document.getElementById('claudio');
        claudio.style.display ="block";
        claudio.addEventListener('click', calcularClicks);
        frame = setInterval(movimentar, 700);
        contole = 1;
    }
 }

function movimentar(){
    claudio.style.left = Math.random() * 1100 + "px";
    claudio.style.top = Math.random() * 500 + "px"; 
    tempo++;
    if(tempo == 10){
        clearInterval(frame);     
        claudio.style.display = "none";
        msg.innerHTML = `<span>Voce fez ${cliks} pontos.</span><br><br>`;

        if(cliks == 0){
            msg.innerHTML += '<strong> Game over, vc não tem odio do Claudio</strong>';
        }else if(cliks <= 400){
            msg.innerHTML += '<strong>Seu odio pelo Claudio esta aumentando, Continue assim</strong>';
        }else if(cliks > 400){
            msg.innerHTML += '<strong>Muito bem, vc odeia o claudio no fundo do seu corção</strong>';
        }  
        playAgain.style.display = "block";        
    } // FIM do tempo do jogo
    
}

function calcularClicks(){
    cliks += 100;
} 

function jogarDnovo(){
    contole = 0;
    tempo = 0;
    iniciar();
    movimentar();
}







      
