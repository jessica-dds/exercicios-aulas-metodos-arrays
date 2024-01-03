const nomes = ['Maria', 'Carlos', 'Amanda', 'Felipe'];
const numeros = [2, 5, 9, 7];

//const minhaFuncaoCallback = (nome) => {
//   return nome === 'Maria';
//}

// const resultado = nomes.some(minhaFuncaoCallback);

//console.log(resultado);

const resultado = numeros.some((numero) => {
    return numero % 2 === 0;
});

console.log(resultado);
