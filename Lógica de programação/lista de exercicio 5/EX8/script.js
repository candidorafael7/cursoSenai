function calcJurosCompostos(capital, taxa, tempo) {
	let montante = capital * Math.pow(1 + taxa / 100, tempo);
	return montante;
}

const capital = parseFloat(prompt('digite o capital inicial: '));
const taxa = parseFloat(prompt('digite a taxa de juros aplicada: '));
const tempo = parseFloat(
	prompt('digtite a duração do investimento(em meses): ')
);

const montante = calcJurosCompostos(capital, taxa, tempo);

const capitalFormatado = capital.toLocaleString('pt-BR', {
	style: 'currency',
	currency: 'BRL',
});
const montanteFormatado = montante.toLocaleString('pt-BR', {
	style: 'currency',
	currency: 'BRL',
});

console.log(
	`Seu capital ${capitalFormatado}, investido com ${taxa}% durante ${tempo} meses, gerará um montante de ${montanteFormatado}`
);

alert(
	`Seu capital ${capitalFormatado}, investido com ${taxa}% durante ${tempo} meses, gerará um montante de ${montanteFormatado}`
);
