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
// IF / ELSE IF: menos de 5 o 6 caminos

// let edad = 11;

// if (edad >= 18) {
//   console.log("puede entrar");
// } else if (edad >= 13) {
//   console.log("puede entrar con un adulto");
// } else {
//   console.log("no puede entrar");
// }

// ++++++++++++++
// let edad = 11;
// let siVieneConUnAdulto = true;

// if (edad >= 18) {
//   console.log("puede entrar");
// } else if (edad < 18 && siVieneConUnAdulto) {
//   console.log("puede entrar con un adulto");
// } else {
//   console.log("no puede entrar");
// }

// and---&& evalua que ambas condiciones se cumplan
// or----|| evalua que por lo menos una condicion se cumpla

// ++++++++++++++

// let dia = prompt("ingresa el número de día");
// if (dia === "1") {
//   console.log("lunes");
// } else if (dia === "2") {
//   console.log("martes");
// } else if (dia === "3") {
//   console.log("miercoles");
// } else if (dia === "4") {
//   console.log("jueves");
// } else if (dia === "5") {
//   console.log("viernes");
// } else if (dia === "6") {
//   console.log("sabado");
// } else if (dia === "7") {
//   console.log("domingo");
// } else {
//   console.log("el número no es valid0");
// }

// ++++++++++++++

// SWITCH CASE: más de 5 o 6 caminos

// let dia = prompt("ingresa el número de día");
// switch (dia) {
//   case "1":
//     console.log("lunes");
//     break;
//   case "2":
//     console.log("martes");
//     break;
//   case "3":
//     console.log("miercoles");
//     break;
//   case "4":
//     console.log("jueves");
//     break;
//   case "5":
//     console.log("viernes");
//     break;
//   case "6":
//     console.log("sabado");
//     break;
//   case "7":
//     console.log("domingo");
//     break;
//   default:
//     console.log("el numero no es valido");
// }

let sandwich = 100;
let pan = prompt("qué pan quieres?");
let extra = prompt("qué extra quieres?");

if (pan === "comun" || pan === "arabe") {
  pan === "comun" ? (sandwich = sandwich + 2) : (sandwich += 5);
} else {
  alert("el pan es incorrecto");
}

switch (extra) {
  case "queso":
  case "carne":
  case "panceta":
    sandwich += 10;
    break;
  case "pollo":
    sandwich += 5;
    break;
  case "verdura":
    sandwich += 2;
    break;
  default:
    alert("extra no valido");
}

alert("el precio de su sandwich es de " + sandwich);

// ++++++++++++++
// TERNARIO : siempre y cuando tenga unicamente dos caminos

// let edad = prompt("ingresa tu edad");

// edad >= 18 ? console.log("mayor") : console.log("menor");
