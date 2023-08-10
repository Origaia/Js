console.log("Atividade 4")
{
    let pessoa={
        nome: "",

        nota: 0,

        matricula: ""
    }
    pessoa.nome=prompt("Digite o nome do aluno")
    pessoa.nota=parseFloat(prompt("Digite o valor da nota"))
    pessoa.matricula=prompt("Digite a matricula do aluno")

    console.log("O aluno "+pessoa.nome+",de matricula de número "+pessoa.matricula+"obteve a nota: "+pessoa.nota)
}
console.log("Atividade 5")

    const imc={
        abaixo: 18.5,
        entre1: 25,
        entre2: 30,
        entre3: 35,
        acima: 40
    }
    
    let pessoa={
        peso: 0,
        altura: 0,
        imc: 0
    }

    console.log("DIGITE SEU PESO É SUA ALTURA")
    pessoa.peso=parseFloat(prompt("PESO:"))
    pessoa.altura=parseFloat(prompt("ALTURA:"))
    //Formula
    pessoa.imc=pessoa.peso/(pessoa.altura*pessoa.altura)
    //Parametros
    if(pessoa.imc<imc.abaixo){
        console.log("ABAIXO DO PESO")
    }
    else if(pessoa.imc>imc.abaixo && pessoa.imc<imc.entre1){
        console.log("PESO IDEAL (PARÁBENS)")
    }
    else if(pessoa.imc>entre1 && pessoa.imc<imc.entre2){
        console.log("LEVEMENTE ACIMA DO PESO")
    }
    else if(pessoa.imc>entre2 && pessoa.imc<imc.entre3){
        console.log("OBESIDADE GRAU I")
    }
    else if(pessoa.imc>entre3 && pessoa.imc<imc.acima){
        console.log("OBESIDADE GRAU II (SEVERA)")
    }
    else{
        console.log("OBESIDADE GRAU III (MÓRBIDA)")
    }
    
 
