var guizao = document.getElementById('guizao');
var claudio = document.getElementById('claudio');
var miguel = document.getElementById('miguel');
var julho = document.getElementById('julho');
var contole = 1;
julho.style.display = "block";

tempo = setInterval(trocarFoto, 3000);

function trocarFoto(){      
    if(contole >= 5){
            contole = 1;
    }
    switch (contole){
        case 1:
            julho.style.display = "none";
            guizao.style.display = "block";
        break;
        case 2:
            guizao.style.display = "none";
            claudio.style.display = "block";
        break; 
        case 3:
            claudio.style.display = "none";
            miguel.style.display = "block";
        break;  
        case 4:
            miguel.style.display = "none";
            julho.style.display = "block";
        break;  
    } // fim switch
    contole++;
}
