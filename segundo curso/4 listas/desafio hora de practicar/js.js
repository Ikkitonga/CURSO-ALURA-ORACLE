/* 1 Crea una lista vacía llamada "listaGenerica".*/


// let listaGenerica = [];



/* 2 Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los 
siguientes elementos: 'JavaScript', 'C', 'C++', 
'Kotlin' y 'Python'.*/

// let lenguagesDeProgramacion = ["Javascript", "C", "C++", "Kotlin", "Python"];




/* 3 Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
'Java', 'Ruby' y 'GoLang'.*/

// let lenguagesDeProgramacion = ["Javascript", "C", "C++", "Kotlin", "Python"]
//     lenguagesDeProgramacion.push("Java", "Ruby", "GoLang"); 
// console.log(lenguagesDeProgramacion);




/* 4 Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion. */

// function lenguajes(){
//     console.log(lenguagesDeProgramacion);
// }

// lenguajes();




/* 5 Crea una función que muestre en la consola todos los elementos de la lista 
"lenguagesDeProgramacion en orden inverso.*/

// function lenguagesDeProgramacionInversos(){

//    let inversos = lenguagesDeProgramacion.reverse();
//    console.log(inversos);
// }

// lenguagesDeProgramacionInversos();




/* 6 Crea una función que calcule el promedio de los elementos en una lista de 
números.*/


// function promedioDeArray(){
//     let suma = 0;
//     let promedio = 0;
//     let arrayDeNumeros = [1, 2, 4, 5, 3]
//     for (let i = 0; i < arrayDeNumeros.length; i++){
//         suma += arrayDeNumeros[i];
//         promedio = suma / arrayDeNumeros.length;
//     }    
//     console.log(`la suma de los numeros del array es: ${suma}`);
//     console.log(arrayDeNumeros.length);
//     console.log(`el promedio de los numeros del array es: ${promedio}`);
// }

// promedioDeArray()




/* 7 Crea una función que muestre en la consola el número más grande y 
el número más pequeño en una lista.*/

// function numeroMayorYMenor() {

//     let listaDeNumerosVarios = [4, 8, 5, 1, 3];
//     let numeroMayor = listaDeNumerosVarios[0];  /* inicializamos la variable con la posicion 0 de la listaDeNumerosVarios */ 
//     let numeroMenor = listaDeNumerosVarios[0];  /* inicializamos la variable con la posicion 0 de la listaDeNumerosVarios */ 

//     for (let i = 1; i < listaDeNumerosVarios.length; i++) {  /* inicia la variable i en 1 para ver la siguiente posicion ya que numeroMayor esta inicializado en la primera posicion */
//         if (listaDeNumerosVarios[i] > numeroMayor){  
//             numeroMayor = listaDeNumerosVarios[i];
//         }
//         if (listaDeNumerosVarios[i] < numeroMenor){
//             numeroMenor = listaDeNumerosVarios[i];
//         }
//     }
//     console.log(`Este es el numero mayor ${numeroMayor} y el numero menor ${numeroMenor}`)
// }

// numeroMayorYMenor();


/* 8 Crea una función que devuelva la suma de todos los elementos en una lista.*/

// function sumaDelArray() {
//     let listaDeNumerosVarios = [4, 8, 5, 1, 3];
//     let suma = 0;
//     for (let i = 0; i < listaDeNumerosVarios.length; i++){
//         suma += listaDeNumerosVarios[i];
//     }
//     console.log(`la suma de los elementos del array es: ${suma}`)
// }

// sumaDelArray();


/* 9 Crea una función que devuelva la posición en la lista donde se encuentra un 
elemento pasado como parámetro, o -1 si no existe en la lista.*/

// function posicionDelElemento(elemento){
//     let listaDeNumerosVarios = [4, 8, 5, 1, 3];
//     console.log(listaDeNumerosVarios.indexOf(elemento));
// }
    
// posicionDelElemento(3);





/* 10 Crea una función que reciba dos listas de números del mismo tamaño y 
devuelva una nueva lista con la suma de los elementos uno a uno.*/

// este ejercicio me da en el console.log como resultado el numero 17 
// function dosListas(){
//     let listaUno = [1,3,5,7,9];
//     let listaDos = [0,2,4,6,8];
//     let sumaDeListas = [];
//         for (let i = 0; i < listaUno.length; i++){
//             for (let z = 0; z < listaDos.length; z++){
//                 sumaDeListas.push = (listaUno[i] + listaDos[z]);   
//             }
//         }
        
//         console.log(sumaDeListas);
// }

// dosListas();

// function dosListas() {
//     let listaUno = [1, 3, 5, 7, 9];
//     let listaDos = [0, 2, 4, 6, 8];
//     let sumaDeListas = [];
    
    // Iterar sobre las listas y sumar los elementos de la misma posición
//     for (let i = 0; i < listaUno.length; i++) {
//         sumaDeListas.push(listaUno[i] + listaDos[i]);
//     }
    
//     return sumaDeListas;
// }

// Ejemplo de uso
// console.log(dosListas()); // Imprimirá [1, 5, 9, 13, 17]



/* 11 Crea una función que reciba una lista de números y devuelva una nueva 
lista con el cuadrado de cada número.*/


// function cuadradoDeArray(){
    // declaro las variables arrayCuadrado es donde voy a poner los resultados
    // let array = [1,2,3,4,5];
    // let arrayCuadrado = [];

    // ingreso en el bucle el array y pretendo elevar el numero al cuadrado
//     for (let i = 0; i < array.length; i++){
//         arrayCuadrado.push(Math.pow(array[i], 2));
//     }
//     console.log(arrayCuadrado);
// }

// cuadradoDeArray();