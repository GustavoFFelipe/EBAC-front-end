


function Carro(portas,motor,ano) {
    this.portas = portas
    this.motor = motor
    this.ano =ano;
}
function CarroSport(modelo, fabricante) {
    Carro.call(this,"2 Portas", "V8", 2022)
        this.modelo = modelo;
        this.fabricante = fabricante;
}
function CarroSedan(modelo, fabricante) {
    Carro.call(this,'4 Portas', 'Economico', 2022)
    this.modelo = modelo;
    this.fabricante = fabricante;
}

const carroSport1 = new CarroSport("Camaro", 'Chevrolet');
const carroSport2 = new CarroSport("Mustang Shelby", 'Ford');
const carroSedan1 = new CarroSedan("Cruze", "Chevrolet");
const carroSedan2 = new CarroSedan("Fusion","Ford");

console.log(carroSport1);
console.log(carroSport2);
console.log(carroSedan1);
console.log(carroSedan2);
