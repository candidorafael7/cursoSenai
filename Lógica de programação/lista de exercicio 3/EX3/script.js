let contador = 0;
let soma = 0;

while (contador < 10) {
	const nota = parseFloat(prompt(`Digite a ${contador + 1}ª nota:`));
	if (isNaN(nota)) {
		alert('Por favor, digite um número válido.');
	} else {
		soma += nota;
		contador++;
	}
}

const media = soma / 10;
console.log(`A soma das notas é: ${soma}`);
console.log(`A média das notas é: ${media}`);

// let contador = 0;
// let soma = 0;

// do {
// 	const nota = parseFloat(prompt(`Digite a ${contador + 1}ª nota:`));
// 	if (isNaN(nota)) {
// 		alert('Por favor, digite um número válido.');
// 	} else {
// 		soma += nota;
// 		contador++;
// 	}
// } while (contador < 10);

// const media = soma / 10;
// console.log(`A soma das notas é: ${soma}`);
// console.log(`A média das notas é: ${media}`);
