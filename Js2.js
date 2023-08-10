let array=[]
for(let cont=0;cont<5;cont++){
    array.push(parseFloat(prompt("Digite uma nota:")))
    console.log(array[cont])
}
let soma=0
let maior=array[0]
let menor=array[0]
for(let cont=0;cont<5;cont++){
    soma+=array[cont]
    console.log(soma)
    if(maior<array[cont]){
        maior=array[cont]
    }
    else if(menor>array[cont]){
        menor=array[cont]
    }
}
let media
media=soma/5
console.log("O maior nota é:"+maior)
console.log("A menor nota é:"+menor)
console.log("A média das notas é:"+media)
