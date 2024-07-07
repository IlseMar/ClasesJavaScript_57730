// OTROS TIPOS DE DATOS (FALSY/= booleans)
//undefined -> no está definido
//null -> no tiene valor
//NaN -> not a number
// -los 3 son el resultado de algo que no se le ha asignado un valor. Y/o para
//crear valiables o algo sin definir
// -Si bien no son buleanos, si los ponemos en una condicional , ya que son falsy

//OBJETS (estructura de datos)
//Definir una entidad. Crear una variable que contenga toda la info de una entidad
//Se usancuando se requiera más de una caracteristica.
// Pares clave : valor
//Sintaxis let (nombre) ={ variable : "valor",} las cosas internas de los objetos son propiedades/= variables
//Propiedades: caracteristicas, adjetivos que definan al objetos
//sintaxis propiedades // nombre : ,
//Metodos: verbos o acciones -> tienen asignadas una funcion
//sintáxis metodo // nombre: function(){}

//ejercicio. Representar un producto

// let nombreTelefono = "motorola"
// let precioTelefono ="100"
// let descripcionTelefono = "acmpasoc aspooasjmcas apojcasx"

let telefono = {
  nombre: "motorola",
  precio: 100,
  descripcion: "este es el modelo",
  aumentarPrecio: function () {
    return "vamos a aumentar el precio";
  },
};

console.log(telefono.nombre);
console.log(telefono.precio);

let x = telefono.aumentarPrecio();
console.log(x);

console.log(telefono);

//manipulacion del objeto (cambiar, crear, propiedades)

telefono.nombre = "samsung";
telefono.stock = 15;
// delete telefono.precio;

console.log(telefono);

//Palabra reservada "This"
//

const perro = {
  nombre: "jack",
  edad: 4,
  ladrar: function () {
    return "wua wau";
  },
  hablar: function () {
    return "hola mi nombre es " + this.nombre;
  },
};

perro.color = "blanco y marron";

console.log(perro);

//Nota: Cuando la variable es CONST sí puedo cambiar el valor de las propiedades,
//pero no puedo cambiar el valor de la variable (con let sí)
let retorno = perro.hablar();
console.log(retorno);

perro.nombre = "pepito";
let retornoDos = perro.hablar();
console.log(retornoDos);

perro.aumentarEdad = function () {
  this.edad += 1;
};

perro.aumentarEdad();
console.log(perro["edad"]);

let retornarPropiedad = (prop) => {
  return perro[prop];
};

let resultado = retornarPropiedad("edad");
console.log(resultado);

//class, constructor
//sintáxis class (nombreDelClass, en singular, la 1er letra del nombre en MAYS){
//constructor (propiedades){this.nombreDelThis=nombreParámetro}}
//Instanciar (o crear). Sintaxis: let nombre = new nombreDelClass ()

class Telefono {
  constructor(nombre, precio, stock) {
    (this.x = nombre), (this.y = precio), (this.z = stock);
  }
}

let nombre1 = prompt("nombre del telefono");

let telefonoUno = new Telefono(nombre1, 100, 5);
let telefono2 = new Telefono("samsung", 120, 10);
let telefono3 = new Telefono("iphone", 220, 3);

console.log(telefonoUno);
console.log(telefono2);
console.log(telefono3);

//ejemplo 2 e-commerce

class Producto {
  constructor(nombre, precio, stock, estaDisponible) {
    (this.nombre = nombre),
      (this.precio = precio),
      (this.stock = stock),
      (this.estaDisponible = estaDisponible);
  }
  vender(cantidad) {
    if (this.estaDisponible) {
      this.stock -= cantidad;
    } else {
      console.log("no hay stock");
    }
    this.checkStock();
  }
  checkStock() {
    this.estaDisponible = this.stock > 0;
  }
}

let televisor = new Producto("tele", 100, 10, true);
let mochila = new Producto("mochila", 200, 50, true);
console.log(televisor.estaDisponible);

televisor.vender(2);
console.log(televisor.stock);

// televisor.checkStock();
console.log(televisor.estaDisponible);

televisor.vender(2);
televisor.vender(6);
// televisor.checkStock();
console.log(televisor.estaDisponible);
