function MaxNum(n1, n2, n3) {
	var n1 = prompt('digite o primeiro número:');
	var n2 = prompt('digite o segundo número:');
	var n3 = prompt('digite o terceiro número:');

	return Math.max(n1, n2, n3);
}
var result = MaxNum();
console.log(result);
