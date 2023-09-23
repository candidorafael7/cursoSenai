function botao() {
	let n = parseInt(prompt('digite um número'));

	if (n % 2 === 0) {
		console.log('esse número é par');
		alert('esse número é par');
	} else {
		console.log('esse número é impar');
		alert('esse número é ímpar');
	}
}
