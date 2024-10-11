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

