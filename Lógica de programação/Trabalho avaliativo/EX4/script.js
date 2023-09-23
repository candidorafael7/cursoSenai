function calcAumento() {
	var opcoes = [
		'Opção A = 20%(Max = R$999)',
		'Opção B = 10%(Max = R$1999)',
		'Opção C = 5%(Max = R$2999)',
		'Opção D(>=3000)',
		'cancelar',
	];

	var escolha = prompt('Escolha uma opção:\n' + opcoes.join('\n'));
	escolha = escolha.toUpperCase();

	let salario;
	switch (escolha) {
		case 'A':
			salario = parseInt(prompt('digite o seu salário:'));

			if (salario >= 0 && salario < 1000) {
				salario = salario + salario * 0.2;

				const salarioFormatado = salario.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				});
				console.log(`Seu novo salário é de ${salarioFormatado}`);
				alert(`Seu novo salário é de ${salarioFormatado}`);
			} else {
				console.log('Entrada inválida');
				alert('Entrada inválida');
			}

			break;
		case 'B':
			salario = parseInt(prompt('digite o seu salário:'));

			if (salario >= 1000 && salario < 2000) {
				salario = salario + salario * 0.1;

				const salarioFormatado = salario.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				});
				console.log(`Seu novo salário é de ${salarioFormatado}`);
				alert(`Seu novo salário é de ${salarioFormatado}`);
			} else {
				console.log('Entrada inválida');
				alert('Entrada inválida');
			}

			break;
		case 'C':
			salario = parseInt(prompt('digite o seu salário:'));

			if (salario >= 2000 && salario < 3000) {
				salario = salario + salario * 0.05;

				const salarioFormatado = salario.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				});
				console.log(`Seu novo salário é de ${salarioFormatado}`);
				alert(`Seu novo salário é de ${salarioFormatado}`);
			} else {
				console.log('Entrada inválida');
				alert('Entrada inválida');
			}
			break;

		case 'D':
			console.log('Não elegível para aumento');
			alert('Não elegível para aumento');
			break;
		case null:
			console.log('Operação cancelada');
			alert('Operação cancelada');
			break;

		default:
			console.log('Opção inválida');
			alert('Operação inválida');
			break;
	}
}
calcAumento();
