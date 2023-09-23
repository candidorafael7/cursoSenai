let contadorPares = 0;
let numerosPares = [];
let contador = 0;

while (contador < 10) {
	const numero = parseInt(prompt(`Digite o ${contador + 1}º número:`));

	if (numero % 2 === 0) {
		contadorPares++;
		numerosPares.push(numero);
		contador++;
	} else {
		alert('Por favor, digite um número válido.');
	}
}

console.log(`Você digitou ${contadorPares} números pares:`);
console.log(numerosPares);
