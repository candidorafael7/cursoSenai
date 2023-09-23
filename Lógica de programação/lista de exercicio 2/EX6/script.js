let salario = parseInt(prompt('informe o seu salário: '));
var A20 = 20;
var A15 = 15;
var A10 = 10;
var A5 = 5;

var aumento;
var novoSalario;

if (salario <= 280) {
	aumento = salario * (A20 / 100);
	novoSalario = salario + aumento;

	console.log(
		' Seu salário de: R$ ' +
			salario +
			',00 foi aumentado em ' +
			A20 +
			'% que gerou um aumento de ' +
			aumento +
			'. Seu novo sálario é de: ' +
			novoSalario
	);

	alert(
		' Seu salário de: R$ ' +
			salario +
			',00 foi aumentado em ' +
			A20 +
			'% que gerou um aumento de ' +
			aumento +
			'. Seu novo sálario é de: ' +
			novoSalario
	);
} else if (salario > 280 && salario <= 700) {
	aumento = salario * (A15 / 100);
	novoSalario = salario + aumento;

	console.log(
		' Seu salário de: R$ ' +
			salario +
			',00 foi aumentado em ' +
			A15 +
			'% que gerou um aumento de ' +
			aumento +
			'. Seu novo sálario é de: ' +
			novoSalario
	);

	alert(
		' Seu salário de: R$ ' +
			salario +
			',00 foi aumentado em ' +
			A15 +
			'% que gerou um aumento de ' +
			aumento +
			'. Seu novo sálario é de: ' +
			novoSalario
	);
} else if (salario > 700 && salario <= 1500) {
	aumento = salario * (A10 / 100);
	novoSalario = salario + aumento;

	console.log(
		' Seu salário de: R$ ' +
			salario +
			',00 foi aumentado em ' +
			A10 +
			'% que gerou um aumento de ' +
			aumento +
			'. Seu novo sálario é de: ' +
			novoSalario
	);

	alert(
		' Seu salário de: R$ ' +
			salario +
			',00 foi aumentado em ' +
			A10 +
			'% que gerou um aumento de ' +
			aumento +
			'. Seu novo sálario é de: ' +
			novoSalario
	);
} else {
	aumento = salario * (A5 / 100);
	novoSalario = salario + aumento;

	console.log(
		' Seu salário de: R$ ' +
			salario +
			',00 foi aumentado em ' +
			A5 +
			'% que gerou um aumento de ' +
			aumento +
			'. Seu novo sálario é de: ' +
			novoSalario
	);

	alert(
		' Seu salário de: R$ ' +
			salario +
			',00 foi aumentado em ' +
			A5 +
			'% que gerou um aumento de ' +
			aumento +
			'. Seu novo sálario é de: ' +
			novoSalario
	);
}
