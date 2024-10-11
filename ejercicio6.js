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
