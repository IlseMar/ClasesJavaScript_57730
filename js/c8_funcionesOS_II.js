let usuarios = [
  {
    nombre: "pepe",
    email: "pepe@gmail.com",
    telefono: "123456",
  },
  {
    nombre: "juan",
    email: "juan@gmail.com",
    telefono: "123456",
  },
  {
    nombre: "maria",
    email: "mariagmail.com",
    telefono: "123456",
  },
];

//Método FOREACH: nunca retorna nada
//tampoco pide rertornar algo adrentro
//Sirve para ejecutar un ciclo que tenga acceso a un elemento
//Es como un ciclo For pero más simplee
//La diferencia con Map es que map solo crea un nuevo array, forEach
//no crea uno nuevo, sino que modifica al mismo

//Nomenclatura de los 2 parámetros en los métodos:
//1°El singular del plural del array (usuarios= usuario)

let arraryForEach = usuarios.forEach((usuario, i) => {
  usuario.id = i + 1;
  usuario.nombre =
    usuario.nombre.charAt(0).toUpperCase() + usuario.nombre.slice(1); //poner la 1ra en mayuscula
});

console.log(usuarios);

//Método SOME: devuelve siempre un booleano
//me pide que retorne en cada vuelta, una condicion
//es como el if, un condicional.
//Si se encuentra al menos una vez, devuelve true
//para identificar si en un array existe algo o no

// if (usuarios.find((usuario) => usuario.nombre === "Juan") !== undefined) {
//   console.log(true);
// } else {
//   console.log(false);
// }

let existeJuan = usuarios.some((usuario) => usuario.nombre === "Juan");
console.log(existeJuan);

//Método EVERY:  devuelve siempre un booleano
//devuelve true si todos cumplen la condicion
//si uno no lo cumple, devuelve false
let todosTienenEmail = usuarios.every((usuario) => usuario.email.includes("@"));
console.log(todosTienenEmail);

const determinarMailValido = (nombre) => {
  let usuario = usuarios.find((usuario) => usuario.nombre === nombre);
  let tieneEmailValido = usuario.email.includes("@");
  return tieneEmailValido;
};

let juan = determinarMailValido("Juan");
let maria = determinarMailValido("Maria");
let pepe = determinarMailValido("Pepe");
console.log("juan tiene @?", juan);
console.log({ maria });
console.log({ pepe });

//si tengo como clave el mismo nombre el valor y la propuidad, solo queda una
// let edad = 15;
// let persona = {
//   edad,
// };

// console.log({ persona });

//Objeto preestablecido por JS:
// Objeto MATH: saber el num maximo de una coleccion
//sintaxis Math (1er mayusculs)
//no recibe un array sino una lista, si es array, se antenponer ...

let numeros = [1, 34, 6, 7, 79];
let max = Math.max(...numeros);
console.log(max);

let usuariosDos = [
  {
    id: 1,
    nombre: "pepe",
    email: "pepe@gmail.com",
    telefono: "123456",
  },
  {
    id: 2,
    nombre: "juan",
    email: "juan@gmail.com",
    telefono: "123456",
  },
  {
    id: 3,
    nombre: "maria",
    email: "mariagmail.com",
    telefono: "123456",
  },
];

let arraryDeIds = usuariosDos.map((usuario) => usuario.id);
console.log(arraryDeIds);

let max1 = Math.max(...arraryDeIds); //sread operator
console.log(max1);

let numero = 5.5;

console.log(Math.ceil(numero)); // redondea para arriba
console.log(Math.floor(numero)); //redondea para abajo
console.log(Math.round(numero)); // lo lleva al entreo más cercano

let aleatorio = Math.floor(Math.random() * 36 + 1);
console.log(aleatorio);

//ejercicio juego piedra, papel y tijera
let elemento1 = "piedra";
let elemento2 = undefined;
let numRandom = Math.random() * 15 + 1;
if (numRandom <= 5) {
  elemento2 = "piedra";
} else if (numRandom <= 10) {
  elemento2 = "tijera";
} else {
  elemento2 = "papel";
}
console.log(elemento2);

// Objeto DATE:
//Sintáxis: new Date ()

let fecha = new Date();
console.log(fecha);
console.log(fecha.getDay()); // luners 1 -- domingo 7
console.log(fecha.getMonth()); // enero 0 -- diciembre 11
console.log(fecha.getDate()); // dia del mes
console.log(fecha.getFullYear()); //año

let fechaFutura = new Date("2024-07-16T16:13:00");
console.log(fechaFutura);
console.log(fechaFutura.getMinutes()); //minutos
console.log(fechaFutura.getSeconds()); //segundos
console.log(fechaFutura.getHours()); //horas

console.log((fechaFutura - fecha) / (1000 * 60 * 60));

//Metodo SORT: ordenar
//modifica el array original
let arrayCuentas = [
  {
    id: 1,
    cbu: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 5100,
    titularCuenta: "pepito",
    estadoDeCuenta: "al dia",
  },
  {
    id: 2,
    cbu: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 300,
    titularCuenta: "maria",
    estadoDeCuenta: "con deuda",
  },
  {
    id: 3,
    cbu: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 2200,
    titularCuenta: "juancito",
    estadoDeCuenta: "al dia",
  },
  {
    id: 4,
    cbu: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 500,
    titularCuenta: "carmen",
    estadoDeCuenta: "al dia",
  },
  {
    id: 5,
    cbu: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 1200,
    titularCuenta: "Jack",
    estadoDeCuenta: "con deuda",
  },
];

let nums = [1, 6, 12, 2, 3, 5];
nums.sort((a, b) => b - a); //orena de manera ascendente, descendente

console.log(nums);

let palabras = ["casa", "avion", "abeja", "mariposa"];
palabras.sort((a, b) => a.localeCompare(b));
console.log(palabras);

// arrayCuentas.sort((a, b) => a.saldoEnPesos - b.saldoEnPesos);
// console.log(arrayCuentas);
arrayCuentas.sort((a, b) => a.id - b.id);
console.log(arrayCuentas);

//Metodo REDUCE: reduce a su minima expresion
//recibe DOS parametros, uno es el Callback y el otro, el valor inicial del array
//El primer parametro del metodo: acumulador y siempre inicia en el 1er elemento
//la iteración inicia desde el 2do elemento
//El 2do parametro
//me pide que retorne el cambio que quiero hacer

//sin metodo
const sumarArray = () => {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    acc += nums[i];
  }
  return acc;
};
console.log(sumarArray());

//con metodo
let numeritos = [1, 6, 12, 2, 3, 5];
let total = numeritos.reduce((acc, elemento) => acc + elemento, 0);

console.log(total);

let totalCuentas = arrayCuentas.reduce((acc, elemento) => {
  return acc + elemento.saldoEnPesos;
}, 0);
console.log(totalCuentas);

let totalNombres = arrayCuentas.reduce((acc, elemento) => {
  return acc + elemento.titularCuenta + " ";
}, "");

console.log(totalNombres);
