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


// Variables

let palabraAEncriptar = prompt("Por favor ingrese un texto a encriptar");

// utilizo el metodo de string replace para remplazar la vocal y con switch le doy las condiciones

let palabraEncriptada = palabraAEncriptar.replace(/[aeiou]/g, function (match) {
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
});

console.log(palabraEncriptada)












