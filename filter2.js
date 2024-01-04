const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Leo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" },
];

const professoresBackend = professores.filter((professor) => {
    return professor.stack === 'backend';
});

console.log(professoresBackend);

const professoresFrontend = professores.filter((professor) => {
    return professor.stack === 'frontend';
});

console.log(professoresFrontend);
