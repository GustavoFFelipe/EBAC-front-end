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

function handleAprovados(){
    let alunosAprovados = alunos.filter((e)=> {
        return e.nota >= 6
    })
    
    console.log(alunosAprovados)
    
}
handleAprovados()