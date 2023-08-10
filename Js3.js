let dado
let cont
cont=parseInt(prompt("Digite o número de vezes que você deseja rolar o dado:"))
for(let contador=0;contador<cont;contador++){
    dado= Math.floor(Math.random()*7)
    console.log(dado)
}