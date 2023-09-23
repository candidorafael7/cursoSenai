function calcCubo() {
	let n = parseInt(prompt('Digite um Número: '));
	let calc = n ** 3;

	return calc;
}

let resultado = calcCubo();

console.log(`Seu número ao cubo, equivale a ${resultado}`);
