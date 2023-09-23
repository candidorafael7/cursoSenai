var n1 = parseInt(window.prompt("digite o primeiro número: ")) ;
var n2 = parseInt(window.prompt("digite o segundo número: ")) ;
var n3 = parseInt(window.prompt("digite o terceiro número: ")) ;

var soma = [n1, n2, n3];

var tamanho = soma.length;

var reduce = [n1, n2, n3].reduce((accumulator, currentNumber) => {
	return accumulator + currentNumber;
}, 0);

var media = reduce / tamanho;

console.log(media);
