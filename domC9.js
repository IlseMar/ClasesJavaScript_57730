//Document object model. Acceder al DOm mediante un objeto global

console.log(document.body);

//Con base al ID (#)
let subTitle = document.getElementById("sub-title");
console.log(subTitle);

//Con base a la Class (.)
let title = document.getElementsByClassName("title");
console.log(title);

//Con base a la etiqueta
let miH3 = document.getElementsByTagName("h3");
console.log(miH3);

//Con base a qualy: resume los 3 anteriores en uno solo
let miElemento = document.querySelector(".title");
console.log(miElemento);

let misElementosTitles = document.querySelectorAll(".title");
console.log(misElementosTitles);

let contenedorDeProductos = document.querySelector(".container");

contenedorDeProductos.innerHTML = `<h3>algo</h3> <h4>mas</h4>`;

console.log(contenedorDeProductos.innerText); //trae el texto que tiene dentro un nodo
console.log(contenedorDeProductos.innerHTML); //trae el nodo completo, hijos de un elemento

//agregar dentro del Documento, algo
let categorias = document.createElement("div");
// categorias.innerHTML = `<h3>nuevo nodo</h3>`;
// console.log(categorias.innerHTML);
document.body.append(categorias);

let categoriaUno = document.createElement("h3");
categoriaUno.innerText = "esta es mi nueva tarjeta";
//como agregar nodos dentro de un contenedor
categorias.appendChild(categoriaUno);
console.log(categoriaUno);
