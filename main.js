//DOM

// 7. Introducción al DOM
//Ejercicio 1
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

//Ejercicio 2
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
