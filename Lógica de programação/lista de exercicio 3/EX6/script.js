const valor = parseInt(prompt('digite um valor entre 1 e 10: '));

if (valor >= 0 && valor <= 10) {
	console.log(`tabuda do ${valor}: `);

	let contador = 0;

	while (contador <= 10) {
		const tabuada = valor * contador;
		console.log(`${valor} X ${contador} = ${tabuada}`);

		contador++;
	}
} else {
	console.log('Número fora do intervalo válido.');
}
