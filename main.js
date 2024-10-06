/* import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/

//Ejercicio 1
  let a,b,c;
  a = 100;
  b = 50;
  c = a + b; 
  console.log("la suma de a y b es :"+ c);
//Ejercicio 2
  let  nombre ;
  nombre = prompt("¿Cuál es tu nombre?");
  console.log("Hola, "+ nombre);

//2. Operadores lógicos y condicionales}
//Ejercicio 1

 a,b,c = 0;
a = prompt("ingresa valor numerico para a: ");
b = prompt("ingresa valor numerico para b: ");
if(a>b){
  c = a;
  console.log("El mayor número de los dos ingresado es:" + c);
}else if(a === b){
  c = a; 
  console.log("Los números ingresados son iguales y ambos son:"+ c);

}else{
  c = b
  console.log("El mayor número de los dos ingresado es:" + c);
     
}

//Ejercicio 2



let numeroIngresado = prompt("Ingresa un número y te dire si es par ");
if((numeroIngresado%2 )=== 0 ){
  console.log("El número "+ numeroIngresado+ " es par");
}else{
  console.log("El número "+ numeroIngresado+ " es impar")
}

//3. Operadores de asignación y bucles
//Ejercicio 1
let contador = 10;
while(contador >=1 ){
    console.log(contador);
    contador--;
}
//Ejercicio 2
let mayorAcien;
do {
  mayorAcien = prompt("Ingrese un número mayor a 100");
} while (mayorAcien <= 100);
console.log("Ingresaste un número mayor a 100: " + mayorAcien);

//4. Funciones de JavaScript
//Ejercicio 1
let numero = prompt("Ingresa un número y te dire si es par");
console.log("El número es Par: " + esPar(numero));
function esPar(numero){
	numero = numero%2;
  if(numero === 0){
    return true;
  }else{
    return false
  }
}
//Ejercicio 2
let grados = prompt("Ingrese grados celsius ");
console.log(grados+"°C son equivalentes a " + convertirCelsiusAFahrenheit(grados) + "°F");
function convertirCelsiusAFahrenheit(grados){
  return (grados * 1.8 + 32).toFixed(1);
}


//5. Objetos en JavaScript
//Ejercicio 1

let persona = {
	nombre:"Juan",
	edad:23,
	ciudad:"San Juan",
  cambiar_ciudad: function(nuevo){
    this.ciudad = nuevo;   
  }

}
persona.cambiar_ciudad("Mendoza");

 console.log("Persona: " + persona.nombre + ", Edad: " + persona.edad + ", ciudad: " + persona.ciudad);

//Ejercicio 2

 const libro  = {
	titulo:"1984",
	autor:"George Orwell",
	año: 1947,
  es_antiguo: function(){
    const antiguedad = new Date().getFullYear() - this.año;
    if (antiguedad <= 10){
        return false;
    }else{
        return true;
    }

  }

}
console.log(`El libro "${libro.titulo}" es antiguo: ` + libro.es_antiguo());

//6. Arrays
//Ejercicio 1

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numeros2= [];
numeros.forEach((elemento, indice) =>{
  numeros2.push(elemento*2);
});

console.log("Números originales: "+ numeros);

console.log("Números multiplicados por 2 : "+ numeros2);

//Ejercicio 2
let pares = [];
for (let i = 0; i <=20 ; i+= 2) {
    if(i !== 0 ){
      pares.push(i);
    }
    
}
console.log("Primeros números 10 pares :" + pares);


const button = document.getElementById("button");

const parrafo1 = document.getElementById("parrafo1");
const parrafo2 = document.getElementById("parrafo2");
const parrafo3 = document.getElementById("parrafo3");

const CambiarColorParrafo = ()=>{
  parrafo1.classList.add('parrafoAzul');
  parrafo2.classList.add('parrafoAzul');
  parrafo3.classList.add('parrafoAzul');
};

button.addEventListener("click", ()=>{
  console.log("el usuario hizo click");
  CambiarColorParrafo();
});

const button2 = document.getElementById("button2");

document.getElementById("button2").addEventListener("click", ()=> {
  const valoringresado = document.getElementById("ingresar").value;
  alert(valoringresado);
});


//8. Eventos en DOM
//Ejercicio 1
const lista = document.getElementById("elementos");
const elemento = lista.getElementsByTagName("li");

for (let i = 0; i < elemento.length; i++) {
    elemento[i].addEventListener("click", function() {
        console.log(this.textContent); 
    });
}

//Ejercicio 2

const deshabilitar = document.getElementById("disable");
const habilitar = document.getElementById("enable");
const input = document.getElementById("campotexto");


habilitar.addEventListener("click", ()=>{
  input.disabled = false;
});

deshabilitar.addEventListener("click", ()=>{
  input.disabled = true;
});

//9. LocalStorage 
//Ejercicio 1

const button5 = document.getElementById("button5");

const getdatainput =()=>{
    const resultado = localStorage.getItem("datos");
    if(resultado){
      console.log("dato anterior:");
      console.log(JSON.parse(resultado));
    }else{
      console.log("los datos no existen");
    }
    console.log("nuevo dato creado:");
    const correo = document.getElementById("correo").value;
    localStorage.setItem("datos", JSON.stringify({
     correo
    }));

    console.log({
      correo
    });
    const l1 =  document.getElementById("Acambiar");
    l1.textContent = correo; 
};
button5.addEventListener("click", ()=>{
  getdatainput();

});



const button6 = document.getElementById("button6");

button6.addEventListener("click", ()=>{
  const result = localStorage.getItem("datos");
  if(result){
    console.log(JSON.parse(result));
    
    localStorage.clear();
    console.log("eliminado");
    const l2 =  document.getElementById("Acambiar");
    l2.textContent = ""; 
  }else{
    console.log("los datos no existen");
  }
});
