console.log("Operadores avanzados II");

//spread operator
//sirve para hacer copias / agregar propiedades a objetos

// let a = 1;
// let b = a;
// a += 5;
// console.log(b);

let persona = {
  nombre: "pepe",
  edad: 22,
};
console.log(persona);

let persona2 = { ...persona, nombre: "juancito", email: "fulanito@" };
// persona2.nombre = "juancito";
console.log(persona2);

let numeros = [1, 5, 2, 3];
let numeros2 = [...numeros, 8, 10];
console.log(numeros2);

//rest operator
//la usamos en funciones para recibir muchos parámetros

// const sumar = (a, b, c, d) => {
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(d);
//   return a + b;
// };

// console.log(sumar(5, 2));

const sumar = (...varios) => {
  let total = varios.reduce((acc, elemento) => acc + elemento, 0);
  console.log(total);
};

sumar(5, 2, 5, 20, 10);
