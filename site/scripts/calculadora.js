var txt1 = document.getElementById('n1')
var txt2 = document.getElementById('n2')

var btn_mais = document.getElementById('mais')
var btn_vezes = document.getElementById('vezes')
var btn_divisao = document.getElementById('divisao')

btn_mais.addEventListener('click', somar)
btn_vezes.addEventListener('click', multiplicar)
btn_divisao.addEventListener('click', dividir)

function somar(){
    if(txt1.value !== '' && txt2.value !== ''){
        var n1 = Number(txt1.value)
        var n2 = Number(txt2.value)
        if(n1 + n2 > 9999){
            alert('Faça uma conta menor !')
        }else{
        var res = document.getElementById('res')
        res.innerHTML = n1 + n2
      }
    
    }else{
        window.alert('digite um numero')
    }  
}

function multiplicar(){
    if(txt1.value !== '' && txt2.value !== ''){
        var n1 = Number(txt1.value)
        var n2 = Number(txt2.value)
        if(n1 * n2 > 9999){
            alert('Faça uma conta menor !')
        }else{
        var res = document.getElementById('res')
        var conta = (n1 * n2)
        res.innerHTML = conta
      }
    
    }else{
        window.alert('digite um numero')
    }  
}

function dividir(){
    if(txt1.value !== '' && txt2.value !== ''){
        var n1 = Number(txt1.value)
        var n2 = Number(txt2.value)
        if(n1 / n2 > 9999){
            alert('Faça uma conta menor !')
        }else{
        var res = document.getElementById('res')
        var conta = (n1 / n2).toFixed(2)
        res.innerHTML = conta
      }
    
    }else{
        window.alert('digite um numero')
    }  
}

  





    


















