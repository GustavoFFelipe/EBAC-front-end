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

    function Aprovados(){
        if (aluno.nota >=6 ){
            console.log(`${aluno.nome} foi aprovado`);
            } else{
                console.log(`${aluno.nome} foi reprovado.`)
            }
    }

    Aprovados()
    })
    
/** Forma Reduzida sem utilizar a função Aprovados, retorna o mesmo resultado
 * alunos.forEach((aluno) => {
    if (aluno.nota >=6 ){
        console.log(`${aluno.nome} foi aprovado`);
        } else{
            console.log(`${aluno.nome} foi reprovado.`)
        }
})
 */
