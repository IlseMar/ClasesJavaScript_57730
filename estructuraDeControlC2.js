// let nombre = prompt("ingresa tu nombre");
// let edad = Number(prompt("ingresa tu edad"));

// console.log("inicio");
// if (edad >= 18) {
//   console.log("gracias por tu compra");
// } else {
//   console.log("debes ser mayor de edad");
// }

// console.log("fin");

// ++++++++++++++

//OPERADORES

// let n1 = 12;
// let n2 = "12";

// console.log(n1 > n2);
// console.log(n1 < n2);
// console.log(n1 >= n2);
// console.log(n1 <= n2);
// console.log(n1 == n2); //comparación simple
// console.log(n1 === n2); //comparación estricta: revisa que no solo sea el mismo dato, sino tambien que sean del mismo tipo
// console.log(n1 != n2); //distincion simple
// console.log(n1 !== n2); //distincion estricta

// let id = "12345";
// console.log(id === "12345");

// ++++++++++++++
// let edad = 11;

// if (edad >= 18) {
//   console.log("puede entrar");
// } else if (edad >= 13) {
//   console.log("puede entrar con un adulto");
// } else {
//   console.log("no puede entrar");
// }

// ++++++++++++++
let edad = 11;
let siVieneConUnAdulto = true;

if (edad >= 18) {
  console.log("puede entrar");
} else if (edad < 18 && siVieneConUnAdulto) {
  console.log("puede entrar con un adulto");
} else {
  console.log("no puede entrar");
}

// and---&& evalua que ambas condiciones se cumplan
// or----|| evalua que por lo menos una condicion se umpla
