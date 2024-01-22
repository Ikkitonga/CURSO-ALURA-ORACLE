// let numeroSecreto = Math.floor(Math.random() * 10);
// let intentos = 0;
// while (intentos < 5) {
//   let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
//   intentos++;
//         console.log(intentos)
//   if (intento == numeroSecreto) {
//     alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
//   } 
// }


// let numeroSecreto = Math.floor(Math.random() * 10);
// let intentos = 0;
// while (intentos < 5) {
//   let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
//   intentos++;
//   console.log(intentos)
//   if (intento == numeroSecreto) {
//     alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
//     break;
//   }
  
// }

let numeroSecreto = Math.floor(Math.random() * 10);
for (let intentos = 0; intentos < 5; intentos++) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    
  }
  
}