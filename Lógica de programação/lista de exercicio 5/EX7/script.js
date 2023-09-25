function contarCaractereNaString(string, caractere) {
	let contador = 0;

	for (let i = 0; i < string.length; i++) {
		if (string[i] === caractere) {
			contador++;
		}
	}

	return contador;
}
const string = prompt('Digite uma string:');
const caractere = prompt('Digite um caractere para contar:');

const resultado = contarCaractereNaString(string, caractere);
console.log(
	`O caractere "${caractere}" aparece ${resultado} vezes na string "${string}".`
);
