const alunos =  [
    {
        nome: "Carlos",
        nota: 10
    },
    {
        nome: 'João',
        nota: 5
    },
    {
        nome: "Claudia",
        nota: 8
    },
    {
        nome: "Miriam",
        nota: 10
    },
    {
        nome: "Ricardo",
        nota: 2
    },
    {
        nome: "Paula",
        nota: 9
    },
];


alunos.forEach((aluno) => {
    if (aluno.nota >=7 ){
        console.log(`${aluno.nome} foi aprovado`);
        } else{
            console.log(`${aluno.nome} foi reprovado.`)
        }
})


