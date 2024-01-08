const numeros = [3, 20, 13, 50, 1, 4, 2, 13];



// ordenação crescente 
numeros.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento < segundoElemento) {
        return 1;
    }

    if (primeiroElemento > segundoElemento) {
        return -1;
    }

    return 0;
});

console.log(numeros);

// ordenação decrescente 
numeros.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento < segundoElemento) {
        return -1;
    }

    if (primeiroElemento > segundoElemento) {
        return 1;
    }

    return 0;
});

console.log(numeros);