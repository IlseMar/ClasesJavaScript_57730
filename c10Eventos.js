//EVENTOS: son cosas que van a ocurrir de forma dinámica

let numero = 0;

let botonSumar = document.getElementById("btn-sumar");
let contador = document.getElementById("contador");
contador.innerText = numero;

// botonSumar.onclick = () => {
//   alert("sumando...");
// };

//Metodo addEventListener
//recibe dos parámetro:
//1ro: el elemento que quiero que esté a la escucha
//2do: y la función a disparar

botonSumar.addEventListener("click", () => {
  numero++;
  contador.innerText = numero;
});

let textoEventos = document.getElementById("eventos");

// textoEventos.addEventListener("click", () => {
//   alert("da click en h3");
// });
// textoEventos.addEventListener("dblclick", () => {
//   alert("da doble click en h3");
// });
// textoEventos.addEventListener("mouseenter", () => {
//   console.log("entro el mouse");
// });
// textoEventos.addEventListener("mouseleave", () => {
//   console.log("sale el mouse");
// });
// textoEventos.addEventListener("mousedown", () => {
//   console.log("aprieto el click");
// });
// textoEventos.addEventListener("mouseup", () => {
//   console.log("suelto el click");
// });
// textoEventos.addEventListener("mouseup", () => {
//   console.log("suelto el click");
// });

//dentro de los parámetro de la funcion del evento tiene dos parametros:
//1er parametro: referencia al evento

let inputNombre = document.getElementById("inputnombre");
inputNombre.addEventListener("keypress", (e) => {
  console.log("tecleando");
});
//SUBMIT: evento que se dispara para enviar un formulario
//para que se dispare, se tiene que tocar un botón dentro del formulario
//preventDefault: previene el comportamiento por defecto (no se actualiza la pagina)

let inputName = document.getElementById("nombre");
let nombreProducto = "";
inputName.addEventListener("input", () => {
  nombreProducto = inputName.value;
  //   console.log(event.target.value);
  //   console.log(inputName.value);
});

let inputDescripcion = document.getElementById("descripcion");
let descripcionDelProducto = "";
inputDescripcion.addEventListener("input", () => {
  descripcionDelProducto = inputDescripcion.value;
});

let inputPrecio = document.getElementById("precio");
let precioProducto = "";
inputPrecio.addEventListener("input", () => {
  precioProducto = inputPrecio.value;
});

let productos = [];

let miFormulario = document.querySelector("form");
console.log(miFormulario);
miFormulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let producto = {
    nombre: nombreProducto,
    precio: Number(precioProducto),
    descripcion: descripcionDelProducto,
  };
  productos.push(producto);
  let miTarjeta = document.createElement("div");
  miTarjeta.style = "border:2px solid red";
  miTarjeta.innerHTML = `<div><h2>${producto.nombre}</h2> 
  <h3>${producto.descripcion}</h3> 
  <h4>${producto.precio}</h4> </div>`;
  contenedorProductos.appendChild(miTarjeta);
  //   console.log(nombreProducto);
  //   console.log(descripcionDelProducto);
  //   console.log(precioProducto);
});

let contenedorProductos = document.querySelector(".container-productos");
console.log(contenedorProductos);
