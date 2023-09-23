function inverterNumeroComSinal() {
	const numero = prompt('Digite um número:');
	if (numero === null || numero === '') {
		alert('Nenhum número fornecido ou operação cancelada.');
		return;
	}

	const numeroNegativo = numero.startsWith('-');
	const numeroAbsoluto = Math.abs(numero);

	const numeroInvertido = parseInt(
		numeroAbsoluto.toString().split('').reverse().join('')
	);

	const numeroFinal = numeroNegativo ? -numeroInvertido : numeroInvertido;

	alert(`Número invertido: ${numeroFinal}`);
}

inverterNumeroComSinal();
