function calcAreaTriangulo() {
	let n1 = parseInt(prompt('digite a altura: '));
	let n2 = parseInt(prompt('digite a base: '));

	calcArea = (n1 * n2) / 2;

	return calcArea;
}

let area = calcAreaTriangulo()

console.log(area);
alert(area)