/* llaves 

la letra e = enter
la letra i = imes
la letra a = ai
la letra o = ober
la letra u = ufat

requisitos
--debe funcionar solo con letras minusculas
--no deben ser utilizados acentos ni caracteres 
    especiales
--Debe ser posible convertir una palabra para la 
    versión encriptada también devolver una palabra 
    encriptada para su versión origina
--El resultado debe ser mostrado en la pantalla

Extra

--Un botón que copie el texto encriptado/desencriptado 
    para la sección de transferencia, o sea que tenga 
    la misma funcionalidad del ctrl+C o de la opción 
    "copiar" del menú de las aplicaciones.
*/

/* control con js de caja de texto y botones */

let cajaEncriptar = document.getElementById("ingreso");
let botonEncriptar = document.getElementById("btn-encriptar");
let botonDesencriptar = document.getElementById("btn-desencriptar");
let tituloDinamico = document.getElementById("titulo");


/* generacion de titulo dinamico*/

function titulo(){
    tituloDinamico.innerHTML = "Desafio Encriptador";
}

titulo()





function encriptado(){ 
    botonEncriptar.addEventListener("click", encriptacion());
}

function encriptacion() {
    /* en la funcion encriptacion utilizo el metodo de string replace para remplazar 
    la vocal y con switch le doy las condiciones*/

    let palabraAEncriptar = cajaEncriptar.value;

    let palabraEncriptada = palabraAEncriptar.toLowerCase().replace(/[aeiou]/g, function (match) {
        switch (match) {
            case "a":
                return "ai";
                break;
            case "e":
                return "enter";
                break;
            case "i":
                return "imes";
                break;
            case "o":
                return "ober";
                break;
            case "u":
                return "ufat";
                break;
        }
    })
     console.log(palabraEncriptada)
}

encriptacion();




/* a proximos dias dejamos la funcion desencriptar en si deberia funcionar al reves
que encriptacion las dudas que tengo son que variable uso y como le digo al replace
por que antes tenia letras pero ahora tengo palabras */

// function desencriptar(){
//     let desencritado = palabraEncriptada.replace()
// }













