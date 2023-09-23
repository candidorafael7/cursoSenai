let maior = Number.MIN_VALUE;
let menor = Number.MAX_VALUE;
let soma = 0;
let contador = 0;

while (contador < 3) {
	const valor = parseFloat(prompt(`digte o ${contador + 1}º valor: `));

	if (!isNaN(valor)) {
		if (valor > maior) {
			maior = valor;
		}
		if (valor < menor) {
			menor = valor;
		}

		soma += valor;
		contador++;
	} else {
		alert('numero inválido, insira um novo valor');
	}
}

const media = soma / 3;

alert(`o maior valor é ${maior}`);
alert(`o menor valor é ${menor}`);
alert(`a media dos  valor é ${media}`);
console.log(maior);
console.log(menor);
console.log(media);
