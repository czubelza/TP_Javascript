
//2. Operadores lógicos y condicionales}
//Ejercicio 1

let a,b,c = 0;
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
