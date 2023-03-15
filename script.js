let numero1=document.querySelector('#numero1');
let form=document.querySelector('#form');
let numero2=document.querySelector('#numero2');
let pResultado=document.querySelector('#resultado')
const adn=document.querySelector('#calculo')

form.addEventListener('submit',calculando);

function calculando(event){
    event.preventDefault();
    let Suma= (Number(numero1.value) + Number(numero2.value))
    pResultado.innerHTML= 'Resultado es: ' + Suma;

}