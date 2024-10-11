
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


