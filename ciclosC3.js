// inicialización; condicion; modificador
//* i: iterador

console.log("algo");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("adios");

let numero = prompt("ingresa el numero");
numero = Number(numero);
// console.log(typeof numero);

for (let i = 1; i <= 10; i++) {
  //   let texto = numero + " * " + i + " = " + numero * i;
  let texto = `${numero} * ${i} = ${numero * i}`;
  console.log(texto);
}

// template literals
// `` (ctrl + alt + }})
