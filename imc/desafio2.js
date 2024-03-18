const nome = window.prompt("Qual seu nome: ")
const peso  = parseFloat(prompt("Qual seu peso"))
const altura =parseFloat(prompt("Qual sua altura"))
const IMC =peso/(altura**2)
if (IMC <18.5){
    alert (nome+ " voce esta abaixo do peso");
    } else if (IMC>= 18.5&& IMC <= 24.9){
        alert(nome+" Seu peso é normal")
    }else if (IMC>= 25 && IMC <= 29.9){
        alert(nome+" Esta com sobrepeso")
    } else if (IMC>= 30 && IMC <= 34.9){
        alert(nome+" Esta com obesidad 1") 
    }else if (IMC>= 35.0 && IMC <= 39.9){
    alert(nome+" Esta com obesidad 2")
    }else if(IMC >= 40.0){
        alert(nome+" você está com Obesidade grau 3")
    }
    alert("Seu IMC é de " +IMC)


