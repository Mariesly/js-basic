let numero1=document.querySelector('#numero1');
let numero2=document.querySelector('#numero2');
let pResultado=document.querySelector('#resultado')
const adn=document.querySelector('#calculo')

adn.addEventListener('click',calculando);

function calculando(){
    let Suma= (Number(numero1.value) + Number(numero2.value))
    pResultado.innerHTML= 'Resultado es: ' + Suma;

}