// let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
// let soma = 0;
// let contador;

// while(contador > qtdNumeros){
//     let numero = parseInt(prompt('Digite el numero:'));
//     soma += numero;
// }

// let promedio = soma / qtdNumeros;

// console.log(promedio);


let qtdNumeros = prompt('Digite la cantidad de números para el cálculo del promedio:');
let contador = 0;
let suma = 0;

while(contador < qtdNumeros){
    let numero = parseInt(prompt('Digite el numero:'));
    console.log(`el numero digitador ${numero}`)
    
    suma = numero + suma
    console.log(suma)

    contador = contador + 1
    console.log(`es el contador ${contador}`)
}

    let promedio = suma / qtdNumeros

    console.log(promedio)