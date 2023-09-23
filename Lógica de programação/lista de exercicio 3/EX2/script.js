
var i;

while (true) {
    i = parseInt(window.prompt('Digite um número entre 10 e 25: '));

    if (i >= 10 && i <= 25) {
        console.log('O número ' + i + ' é válido');
        alert('O número ' + i + ' é válido');
        break; 
    } else {
        console.log('Entrada inválida, reinicie para digitar outro número');
        alert('Entrada inválida, reinicie para digitar outro número');
    }
}