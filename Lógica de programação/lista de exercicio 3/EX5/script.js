let contador = 0;
let soma = 0;

// while (contador >= 0) {
// 	const valor = parseFloat(prompt(`digte o ${contador + 1}º valor: `));

// 	if (valor < 0) {
// 		console.log('número inválido');
//         break
// 	} else {
// 		soma += valor;
// 		contador++;
// 		console.log(soma);
// 	}
// }

do {
	const valor = parseFloat(prompt(`digte o ${contador + 1}º valor: `));

	if (valor < 0) {
		console.log('número inválido');
		break;
	} else {
		soma += valor;
		contador++;
		console.log(soma);
	}
} while (contador >= 0);
