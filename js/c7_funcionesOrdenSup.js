//PROGRAMACION IMPERATIVA
//Copia por valor vs copia por referencia

//copia por valor
let a = 1;
let b = a;

console.log(a);
console.log(b);

a += 7;

console.log(a);
console.log(b);

//copia por referencia
let persona = {
  nombre: "pepe",
  edad: 22,
};

let persona2 = persona;

console.log(persona);
console.log(persona2);

persona.nombre = "juancito";

console.log(persona);
console.log(persona2);

persona2.edad = 55;

console.log(persona);
console.log(persona2);

const productos = [
  { id: 1, nombre: "manzanas", stock: 10 },
  { id: 2, nombre: "peras", stock: 5 },
  { id: 3, nombre: "bananas", stock: 15 },
  { id: 4, nombre: "uvas", stock: 8 },
  { id: 5, nombre: "naranjas", stock: 2 },
  { id: 6, nombre: "kiwis", stock: 4 },
  { id: 7, nombre: "frutillas", stock: 7 },
];
//encontrar un producto con base al id y retornarlo
// si no lo encuentra, retornar false

const encontrar = (identificador) => {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === identificador) {
      return productos[i];
    }
  }
  return false;
};

let productoEncontrado = encontrar(4);
console.log(productoEncontrado);

//encontrar un elemento por ID y sumarle al stock 10 unidades
const encontrarYsumar = (iden) => {
  let x = encontrar(iden);
  x.stock += 10;
};

encontrarYsumar(4);
console.log(productos);

//filtrar productos que tengan stock mayor que 5 y devolver
//un array con esos productos

const filtrador = (miArray) => {
  let nuevoArray = [];
  for (let i = 0; i < miArray.length; i++) {
    if (miArray[i].stock > 5) {
      nuevoArray.push(miArray[i]);
    }
  }
  return nuevoArray;
};

let xy = filtrador(productos);
console.log(xy);

//PROGRAMACION FUNCIONAL O DECLARATIVA

let suma = (a, b) => {}; //parametro
suma(2, 5); //argumento

//FUNCION DE ORDEN SUPERIOR
//Casos:
//1.una funcion que retorna otra función
//2.una funcion que reciba como argumento, otra función

const saludar = (nombre, otraFuncion) => {
  console.log("hola " + nombre);
  otraFuncion();
};

const terminarSaludo = () => {
  console.log("adios");
};

saludar("pepe", terminarSaludo);

//un callback es una funcion que se pasa como argumento a otra funcion
const items = [
  { id: 1, nombre: "manzanas", stock: 10 },
  { id: 2, nombre: "peras", stock: 5 },
  { id: 3, nombre: "bananas", stock: 15 },
  { id: 4, nombre: "uvas", stock: 8 },
  { id: 5, nombre: "naranjas", stock: 2 },
  { id: 6, nombre: "kiwis", stock: 4 },
  { id: 7, nombre: "frutillas", stock: 7 },
];

//Metodos de Arrays (ya establecidos en JS): recorren o iteran el array

//método FIND: busca en el array devuelve el elemento o undefined
//lo que recibe como argumento (callback), es una funcion
//lo que tengo que hacer es que, dentro del callback retorne una condicion
//retornar en cada vuelta un buleano

// let itemEncontrado = items.find((elemento) => {
//   return elemento.id === 5;
// }); forma sin resumir

// let id = Number(prompt("ingresa el numero"));
// let itemEncontrado = items.find((elemento, i) => {
//   console.log(`El elemento ${elemento.nombre} esta en la posicion ${i}`);
// });

//siempre devuelve solo el 1er elemento encontrado, los demás iguales
//ya que se corta la ejecucion
//El 1er parametro de un callback hace referncia al elemento del array (lo "nombra")
//El 2do parámetro de un callback, da acceso a la posicion del elemento del array
//no improta el nombre que se de a cada argumento, lo que importa es la posicion

let id = Number(prompt("ingresa el numero"));
const itemEncontrado = items.find((elemento, i) => elemento.id === id);

console.log(itemEncontrado);

//Metodo FILTER: agraga todos los elementos deseados en un nuevo array
//no corta la ejecucion
//siempre retornar un booleano
//

const arrayFiltrado = items.filter((elemento) => elemento.stock > 5);
console.log(arrayFiltrado);

//Ejercicio: necesito un array que tenga todo lo que tiene el array de
//items, pero quitarles el "stock", agregando propiedades, etc

const recorrerYCambiar = (arreglo) => {
  let nuevoArray = [];
  for (let i = 0; i < arreglo.length; i++) {
    nuevoArray.push({
      id: arreglo[i].id,
      nombre: arreglo[i].nombre,
      precio: 100,
    });
  }
  return nuevoArray;
};

let arrayNuevo = recorrerYCambiar(items);
console.log(arrayNuevo);

//lo anterior fue con programacion imperativa.
//acontinuación con programación funcional (con metodo)
//Método MAP: reccorrer un array y devolver uno nuevo, pero su
//carácteristica es que el nuevo array siempre será de la misma longitud
//retornar en cada vuelta lo que quiero agregar

let arrayMapeado = items.map((elemento) => {
  return { id: elemento.id, nombre: elemento.nombre, precio: 200 };
});
console.log(arrayMapeado);
