function verificaPermissoes(idade) {
    if (idade>=18) {
        console.log("Você já pode votar, portanto já pode tirar sua habilitação");
    }else{
        console.log("Você é menor de idade");
    }
}

const suaIdade = parseInt(prompt("digite sua idade: "))
verificaPermissoes(suaIdade)