// O filter retorna um array com a mesma quantidade de elemntos ou menor.
// Exemplo: um array de 10 elementos e o filter retorna um array de 4 elementos.


const alunos = [
    {nome:"Victor", nota:8.1},
    {nome:"Lucas", nota:6.0},
    {nome:"Ricardo", nota:3.8},
    {nome:"Ana", nota:9.6},
    {nome:"Leticia", nota:7.1},
    {nome:"Juliana", nota:5.9},
]

function alunosAprovados (aluno) {
    return aluno.nota > 6.0
}


const maioresNotas = alunos.filter(alunosAprovados)
console.log(maioresNotas)
