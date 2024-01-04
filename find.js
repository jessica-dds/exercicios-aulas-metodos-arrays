const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 19 }
];

//const resultado = usuarios.find((usuario) => {
//  return usuario.nome === 'ana';
//});

const nomes = ['joao', 'ana', 'maria'];

// const resultado = nomes.find((nome) => {
//   return nome === 'ana';
//});


const numeros = [1, 2, 3];

const resultado = numeros.find((numero) => {
    return numero === 3;
});

console.log(resultado);