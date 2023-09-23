function botao() {
	let contador = 0;
	let notas = [];
	let totalNotas;

	while (contador < 4) {
		const valor = parseInt(prompt(`digite a ${contador + 1}º nota: `));
		contador++;

		if (valor >= 0 && valor <= 10) {
			notas.push(valor);
			totalNotas = notas.reduce(
				(acumulador, valorAtual) => acumulador + valorAtual,
				0
			);
		} else {
			console.log('entrada inválida');
			break;
		}
	}
	const media = totalNotas / contador;

	if (media >= 9 && media <= 10) {
		console.log(`Parabéns, excelente!!! com a media de ${media}`);
	} else if (media >= 7 && media < 9) {
		console.log(`Párabens!!! com a media de ${media}`);
	} else if (media >= 5 && media < 7) {
		console.log(`Você está de recuperação com a media de ${media}`);
	} else if (media >= 0 && media < 5) {
		console.log(`Infelizmente vc não passou com a media de ${media}`);
	}
}
