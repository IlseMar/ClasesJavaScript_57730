// Operador && = avanza si la condicion es truthy
// devuelve el último truthy o el primer falsy
// Operador || = avanza si la condicion es falsy
// devuelve el último falsy o el primer truthy
// Operador ?? (Nullish) // solo toma los "null" o "undefinded"

//admin || dueño || comprador
let rol = "admin";

//dar acceso a modificar productos
let letDoyAcceso = rol === "dueño" || rol === "admin";
if (letDoyAcceso) {
  console.log("te doy acceso a modificar productos");
} else {
  console.log("no tienes acceso");
}

let tieneEntrada = false;
let edad = 21;
// dar acceso a un discoteca
let puede = tieneEntrada === true || edad >= 18;
if (puede) {
  console.log("entraste");
} else {
  console.log("No entraste");
}

let a = null;
let b = "pepe";

let nullish = a ?? b;
console.log(nullish);

//optional chaining
//{}?.algo
//muestra undefined

let persona = {
  nombre: "Marla",
  edad: 20,
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);

let cosa = null;
console.log(cosa?.apellido);
//no se le pueden pedir propiedades a algo que no es un objeto

// let numeros = [12, 15, 11];
let numeros = undefined;
let numerosNuevos = numeros?.map((elemento) => elemento * 2) || [];
console.log(numerosNuevos);

//desestructuración de objetos
//no importa el orden en que se desestructure
//si importa el nombre con que la desestructure

let usuario = {
  nombre: "carlos",
  apellido: "perez",
  edad2: 24,
};

console.log(usuario.nombre);

let { apellido: deLaPersona1, edad2, nombre } = usuario;
console.log(nombre);

// alias

let usuario2 = {
  nombre: "carmen",
  apellido: "garcia",
  edad2: 22,
};
let { apellido: deLaPersona2 } = usuario2;
console.log(deLaPersona2);

//desestructuración de arrays
//si importa el orden
//no importa el nombre
let usuarios = ["pepe", "juan", "carmen", "maria"];
console.log(usuarios[1]);
console.log(usuarios[3]);

let [u1, u2, x, y] = usuarios;
console.log(u1);
console.log(x);

const personaUsuarios = [
  {
    email: "pepe",
    pasword: "1234",
  },
  {
    email: "maria",
    pasword: "456",
  },
  {
    email: "ilse",
    pasword: "7890",
  },
];

let [, , user3] = personaUsuarios;
let { email } = user3;
console.log(user3);
console.log(email);

let auto = {
  color: "rojo",
  modelo: 2022,
  marca: "audi",
};
let auto2 = {
  color: "azul",
  modelo: 2022,
  marca: "vw",
};

const mostrarCaract = ({ marca, color, modelo }, palabra) => {
  // console.log(unAuto?.color);
  // console.log(unAuto?.modelo);
  // console.log(unAuto?.marca);
  // let { marca, color, modelo } = unAuto;
  console.log(color);
  console.log(modelo);
  console.log(marca);
  console.log(palabra);
};

mostrarCaract(auto, "adios");
mostrarCaract(auto2, "hola");
