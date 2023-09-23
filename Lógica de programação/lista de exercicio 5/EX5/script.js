function calcPCircle(raio) {
	if (raio <= 0) {
		console.log('raio tem que ser maior que zero');
	}
	let perimetro = 2 * Math.PI * raio;

	return Math.floor(perimetro);
}

function calcACircle(raio) {
	if (raio <= 0) {
		console.log('raio tem que ser maior que zero');
	}

	let area = Math.PI * Math.pow(raio, 2);
	return Math.floor(area);
}

const raioUsuario = parseFloat(
	prompt('Por favor, insira o valor do raio do círculo:')
);

if (isNaN(raioUsuario)) {
	console.log('Por favor, insira um valor numérico válido.');
} else {
	const area = calcPCircle(raioUsuario);
	const perimetro = calcACircle(raioUsuario);

	console.log(`Raio: ${raioUsuario}`);
	console.log(`Área aproximada do círculo: ${area}`);
	console.log(`Perímetro aproximado do círculo: ${perimetro}`);
}
