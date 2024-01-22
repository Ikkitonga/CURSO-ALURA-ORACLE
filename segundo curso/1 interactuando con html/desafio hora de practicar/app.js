
/* 2 Cambia el contenido de la etiqueta h1 
con document.querySelector 
y asigna el siguiente texto: "Hora del Desafío".*/
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío"

/* 3 Crea una función que muestre en la consola el 
mensaje "El botón fue clicado" siempre que se presione 
el botón "Console".*/

function accionConsole(){
    console.log("El boton fue clicado")
} 

/* 4 Crea una función que se ejecute cuando se haga 
clic en el botón "prompt", preguntando el nombre de una 
ciudad de Brasil. Luego, muestra una alerta con el mensaje
concatenando la respuesta con el texto: "Estuve en {ciudad} 
y me acordé de ti". */

function accionPrompt(){
    let ciudad = prompt("Dame el nombre de una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acorde de ti`)
}


/* 5 Crea una función que muestre una alerta 
con el mensaje: "Yo amo JS" siempre que se presione el
 botón "Alerta".*/

 function accionAlert(){
    alert("Yo amo JS")
 }

 /* 6 Al hacer clic en el botón "suma", pide 2 números y 
 muestra el resultado de la suma en una alerta.*/

function accionSuma(){
    let valor1 = parseInt(prompt("ingrese el primer numero para la suma"));
    let valor2 = parseInt(prompt("ingrese el segundo numero para la suma"));

    suma = valor1 + valor2;
    alert(`el resultado de la suma es ${suma}`)
}

