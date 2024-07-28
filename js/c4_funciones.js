//FUNCIONES
//FUNCIONES DECLARADAS
//Crear bloques de código que no se van a ejecutar
//Sirven para no repetir código
// ESTRUCTURA: palabra-reserbada nombre (){}

//1 declarar la función

// function saludar() {
//   let nombre = "pepe";
//   console.log("hola");
// }

// //2 ejecutarla, invocarla, llamar a la función
// saludar();
// saludar();
// saludar();
// saludar();

//3 scope: el ambiente en donde existe la variable (por fuera o dentro de un bloque de código)

//ejemplos
let nombre = "pepito";

function saludar() {
  let nombre = "Mar";
  return `Hola ${nombre} cómo estás`;
}

let saludito = saludar();
console.log(saludito);

//ejemplo 2
function sumar() {
  let n1 = 2;
  let n2 = 7;
  return n1 + n2;
}

console.log(sumar());

//ejem 3

function restar(numUno, numDos) {
  return numUno - numDos;
}

// parametro ()
let resultadoResta1 = restar(10, 3);
let resultadoResta2 = restar(10, 2);
let resultadoResta3 = restar(10, 1);

console.log(resultadoResta1);
console.log(resultadoResta2);
console.log(resultadoResta3);

//FUNCIONES EXPRESADAS (funciones anónimas. Hay dos tipos: la comun y arrow (flecha))

//Expresada comun
let multiplicar = function (n1, n2) {
  return n1 * n2;
};

console.log(multiplicar(3, 5));

//Expresada (FUNCION FLECHA =>)
//

let dividir = (n1, n2) => {
  return n1 / n2;
};

let resultadoDivision = dividir(585, 2);
console.log(resultadoDivision);

//ejemplo: cambio de pesos a dolares
//nota: solo en el caso de tener un solo parámetro, se pueden eliminar los paréntesis
//nota 2: solo en caso de que el bloque de código sea de una línea,
//se pueden eliminar 'return' y los {} y queda todo en una línea
//Recomendación: usar siempre esta funcion

// let conversor = (cantidadPesos) => {
//   return cantidadPesos / 1000;
// };

let conversor = (cantidadPesos) => cantidadPesos / 1000;

let resultadoConversor = conversor(20000);
console.log(resultadoConversor);

//ejercicio: Calcular el impuesto a la patente
//el impuesto es de 100
//depende de la marca de carro, se agrega X cantidad

// let calImp = (marcaDelAuto) => {
//   let impuestoBase = 100;
//   switch (marcaDelAuto) {
//     case "VW":
//       impuestoBase += 30;
//       break;
//     case "audi":
//       impuestoBase += 40;
//       break;
//     case "volvo":
//       impuestoBase += 20;
//       break;
//     case "renault":
//       impuestoBase += 10;
//       break;
//     case "mercedes":
//       impuestoBase += 45;
//       break;
//     default:
//       impuestoBase = "marca no reconocida";
//   }
//   return impuestoBase;
// };
//sintáxis para cuando habrá más instrucciones dentro del bloque de código

let calImp = (marcaDelAuto) => {
  let impuestoBase = 100;
  switch (marcaDelAuto) {
    case "VW":
      return impuestoBase + 30;
    case "audi":
      return impuestoBase + 40;
    case "volvo":
      return impuestoBase + 20;
    case "renault":
      return impuestoBase + 10;
    case "mercedes":
      return impuestoBase + 45;
    default:
      return (impuestoBase = "marca no reconocida");
  }
};
//sintáxis para cuando ya no habrá más código posterior

let impuestoTotal = calImp("mercedes");
console.log(impuestoTotal);
