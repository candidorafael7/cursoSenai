function contarVogais(string) {
    let contador = 0;
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < string.length; i++) {
        if (vogais.includes(string[i].toLowerCase())) {
            contador++;
        }
    }
    
    return contador;
}

const palavra = prompt("Digite uma palavra: ");
const numeroVogais = contarVogais(palavra);

alert(`A palavra "${palavra}" possui ${numeroVogais} vogais.`);

