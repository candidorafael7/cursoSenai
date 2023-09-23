function mostrarMenu() {
	var opcoes = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4', 'Cancelar'];

	var escolha = prompt('Escolha uma opção:\n' + opcoes.join('\n'));

	switch (escolha) {
		case '1':
			alert('Você escolheu a Opção 1');
			for (let n = 0; n <= 10; n++) {
				console.log(n);
			}
			console.log('');
			break;
		case '2':
			alert('Você escolheu a Opção 2');

			for (let n = 1; n < 100; n += 2) {
				console.log(n);
			}
			console.log('');
			break;
		case '3':
			alert('Você escolheu a Opção 3');

			const valor1 = 8;

			if (valor1 >= 0 || valor1 <= 10) {
				for (let contador = 0; contador <= 10; contador++) {
					const tabuada1 = valor1 * contador;
					console.log(`${valor1} X ${contador} = ${tabuada1}`);
				}
				console.log('');
			}

			break;
		case '4':
			alert('Você escolheu a Opção 4');

			for (let valor2 = 1; valor2 <= 10; valor2++) {
				console.log(`Tabuada do ${valor2}:`);

				for (let contador = 0; contador <= 10; contador++) {
					const tabuada2 = valor2 * contador;
					console.log(`${valor2} X ${contador} = ${tabuada2}`);
				}

				console.log('');
			}

			break;
		case null:
		case 'Cancelar':
			alert('Operação cancelada');
			break;
		default:
			alert('Opção inválida');
	}
}

var mostrarMenuBtn = document.getElementById('mostrarMenuBtn');

mostrarMenuBtn.addEventListener('click', mostrarMenu);
