// inicialización; condicion; modificador
//* i: iterador

// console.log("algo");
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// console.log("adios");

// let numero = prompt("ingresa el numero");
// numero = Number(numero);
// // console.log(typeof numero);

// for (let i = 1; i <= 10; i++) {
//   //   let texto = numero + " * " + i + " = " + numero * i;
//   let texto = `${numero} * ${i} = ${numero * i}`;
//   console.log(texto);
// }

// template literals
// `` (ctrl + alt + }})

// let nombre = "pepe";
// let apellido = "perez";

// // console.log("hola" + nombre + "" + apellido + "como estás?");
// let saludo = console.log(`hola ${nombre} ${apellido} como estás?`);

// for (let i = 10; i >= 5; i--) {
//   console.log(i);
// }

// ejercicio/ C4 24/06

// let n1 = Number(prompt("escribe el primer numero"));
// let n2 = Number(prompt("escribe el segundo numero"));

// if (n1 <= n2 && n2 - n1 <= 100) {
//   for (let i = n1; i <= n2; i++) {
//     console.log(
//       i % 2 === 0
//         ? console.log(`el ${i} es par`)
//         : console.log(`el ${i} es impar`)
//     );
//   }
// } else {
//   alert("el código va a explotar");
// }

//WHILE

// let palabra = "juan";

// while (palabra !== "pepe") {
//   console.log("la palabra es incorrecta");
//   palabra = prompt("ingresa una palabra");
// }
// console.log("la palabra es correcta");

// DO WHILE ()

let a = 12;
let b = 7;

do {
  console.log(a);
  a++;
} while (a <= b);
