//ARRAY (estructura de datos. Colección)
//Sintaxis: let (nombre en plurarl) = [elementos,]
//Pueden estar compuestos de lo que sea
//Trabajan por posiciones // Inician siempre en 0
//para acceder a un elemento del array es [posicion]
//Si bien contienen "elementos", JS trata al array como un objeto
//por lo cual puede tener propiedades y metodos

let numerosDeLaSuerte = [2, 5, 12];
let palabras = ["casa", "avion", "pepe", "juan"];

console.log(palabras);
console.log(palabras[0]);

let nombre1 = "jorge";

console.log(nombre1[0]);
console.log(typeof palabras);

//propiedad length: longitud de un array o un string
//en este caso cuenta el número de elementos del array "palabras"
console.log(palabras.length);

console.log(palabras[palabras.length - 1]);

//ejercicio. Mostrar por consolea los elementos del array
//recorrico de un arreglo
//sintaxis para cuantificar elementos:
// for (let i = 0; i < array.length; i++) {
//     numeros[i];
//   }

let numeros = [5, 2, 7, 4, 9, 12];
//modificar elementos:
// numeros[1] = 15;

//cuantificar elementos:
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);
console.log("aca inicia el for");
for (let i = 0; i < numeros.length; i++) {
  console.log((numeros[i] += 10));
}

//Arrays de Objetos
// let productos = [{},{},{}]
let telefonos = [
  {
    nombre: "motorola",
    precio: 30,
    stock: 3,
  },
  {
    nombre: "samsung",
    precio: 20,
    stock: 1,
  },
  {
    nombre: "iphone",
    precio: 100,
    stock: 5,
  },
];

for (let i = 0; i < telefonos.length; i++) {
  console.log(telefonos[i]);
  console.log(telefonos[i].nombre);
}

//retorna cuanta plata ganaria si se vende toda la mercancia

// let calcularVentaTotal = () => {
//   let valorTotal = 0;
//   valorTotal += telefonos[0].precio * telefonos[0].stock;
//   valorTotal += telefonos[1].precio * telefonos[1].stock;
//   valorTotal += telefonos[2].precio * telefonos[2].stock;
//   return valorTotal;
// };

// let totalVendido = calcularVentaTotal();
// console.log(totalVendido);

class Telefono {
  constructor(nombre, precio, stock) {
    (this.nombre = nombre), (this.precio = precio), (this.stock = stock);
  }
}

// let nombre = prompt("introduce la marca");
// let precio = Number(prompt("introduce el precio"));
// let stock = Number(prompt("introduce el stock"));

// let telefonoNuevo = new Telefono(nombre, precio, stock);
// console.log(telefonoNuevo);

//Cómo agregar un objeto a un array
//nota: los arrays tienen métodos "predeterminados"
//uno de ellos es .push Éste impacta dentro del array
//sintaxis array.metodo

// telefonos.push(telefonoNuevo);

//al meterlo en una variable, se ejecuta la funcion
//y retorna el núm. de elementos del array
// telefonos.push(telefonoNuevo);
// console.log(telefonos);

//metodo que no impacte en el array pero que sí retorne: .includes
// let existe = telefonos.includes(""); //includes siempre resulta un boleano
// console.log(existe);

//metodo .pop para eliminar el ultimo elemento del array. no pide propiedades
// telefonos.pop();
// let z = telefonos.pop();
// // telefonos.pop();
// console.log(telefonos);
// console.log(z);

//metodo "confirm": en pantalla pregunta y devuelve boleanosc
// let seguimos = confirm("Quieres agregar otro telefono");
// console.log(seguimos);
// while(seguimos=true){
// }

const agregarTelefono = () => {
  let nombre = prompt("introduce la marca");
  let precio = Number(prompt("introduce el precio"));
  let stock = Number(prompt("introduce el stock"));

  let telefonoNuevo = new Telefono(nombre, precio, stock);
  console.log(telefonoNuevo);
  telefonos.push(telefonoNuevo);
};

let continuar = confirm("Quieres agregar un nuevo telefono");
while (continuar) {
  agregarTelefono();
  continuar = confirm("quieres agregar otro?");
}

console.log(telefonos);

let calcularVentaTotal = () => {
  let valorTotal = 0;
  for (let i = 0; i < telefonos.length; i++) {
    valorTotal += telefonos[i].precio * telefonos[i].stock;
  }
  return valorTotal;
};

let totalVendido = calcularVentaTotal();
console.log(totalVendido);
