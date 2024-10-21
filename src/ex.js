const alunos = [
    { nome: 'João', nota: 7.5 },
    { nome: 'Maria', nota: 5.5 },
    { nome: 'Pedro', nota: 8.0 },
    { nome: 'Ana', nota: 6.0 },
    { nome: 'Lucas', nota: 4.0 }
];

// Função para filtrar alunos com nota maior ou igual a 6
function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

// Chamando a função e exibindo os alunos aprovados
const alunosAprovadosList = alunosAprovados(alunos);
console.log(alunosAprovadosList);