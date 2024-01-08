const usuarios = [
    { nome: 'Jéssica', sobrenome: 'Gleizer', idade: 35 },
    { nome: 'Adriana', sobrenome: 'Lopes', idade: 40 },
    { nome: 'Amanda', sobrenome: 'Vidal', idade: 33 },
];

const novoArray = usuarios.map((usuario) => {
    return { nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`, idade: usuario.idade }
});

console.log(novoArray);
console.log(usuarios); // não modifica o array original