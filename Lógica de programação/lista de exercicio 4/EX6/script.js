const valor = parseInt(prompt('digite um valor entre 1 e 10: '));

if (valor >= 0 && valor <= 10) {
	console.log(`tabuda do ${valor}: `);

	for (let contador = 0; contador <= 10; contador++) {
		const tabuada = valor * contador;
		console.log(`${valor} X ${contador} = ${tabuada}`);
	}
}else{
    console.log("Número fora do intervalo válido");
}
