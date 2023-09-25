function calcFatorail(numero) {
    let fatorial = 1
    
    for (let contador = 2; contador <= numero; contador++) {
        fatorial *= contador
    }

    return fatorial;
}

const numero = parseInt(prompt("Digite um número: "))
const fatorial = calcFatorail(numero)

console.log(`O fatorial de ${numero} é ${fatorial}`);
alert(`O fatorial de ${numero} é ${fatorial}`);