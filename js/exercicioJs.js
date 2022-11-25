

let form = document.getElementById('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();

const fieldA = document.getElementById('fieldA');
const fieldB = document.getElementById('fieldB');


const fieldAValue = fieldA.value;
console.log(fieldAValue);
const fieldBValue = fieldB.value;
console.log(fieldBValue);

if(fieldBValue < fieldAValue) {
    document.getElementById('message').style.display = 'block';
    document.getElementById('message').style.backgroundColor = 'red';
    document.getElementById('message').innerHTML = 'O campo A é maior!'
    
}
else{
    document.getElementById('message').style.display = 'block';
    document.getElementById('message').style.backgroundColor = 'green';
    document.getElementById('message').innerHTML = 'O campo B é maior!'

}

});




