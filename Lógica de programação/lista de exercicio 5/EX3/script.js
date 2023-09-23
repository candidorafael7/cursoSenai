function fahrenheitToCelsius() {
	let fahrenheit = parseInt(prompt('Digite a temperatura: '));
	let Celsius = (fahrenheit - 32) * (5/9);

	return Celsius;
}

let CtoF = fahrenheitToCelsius();

console.log(CtoF);
alert(CtoF);
