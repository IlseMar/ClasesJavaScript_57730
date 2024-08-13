//Asincronía y Promesas

// setTimeout()
// ejecuta un callback despues de cierto tiempo
//2 parámetros:
//1°- El callback que quiero ejecutar
//2°- Milisegundos

// console.log("iniciar");
// setTimeout(() => {
//   console.log("me ejecuté");
// }, 2000);
// console.log("finalizar");

// //setInterval
// let contador = 0;

// let intervalo = setInterval(() => {
//   console.log("se ejecuta cada 2 segundos");
//   contador++;
//   console.log(contador);
//   if (contador === 5) {
//     clearInterval(intervalo);
//   }
// }, 2000);

//PROMESAS: son resultados de algo -->fetching
//Dos partes:
//1- crear
//2- manejar
//tres estados:
//pending
//fulfilled... (resuelta)
//reject (rechazada)
//reciben un callback y los parámetros del callback son: una funcion que resuelve y otra que rechaza

//la respuesta es una promesa, no los datos en sí

//crear
// let obtenerProductos = new Promise((resolve, reject) => {
//   let rol = "hola";
//   if (rol === "admin") {
//     resolve("se resuelve con éxito");
//   } else {
//     reject({ message: "algo salio mal" });
//   }
// });
// console.log(obtenerProductos);

//manejar --> tiene dos metodos: .then / .catch
//Si la promesa se resuelve, entra .then, si se rechaza entra .catch (nunca ambos al mismo tiempo)
//ambos tienen por parámetro un callback. El parámetro de esos callbacks son la respuesta de la promesa
//.finally -->
//son métodos concatenables
// obtenerProductos
//   .then((respuesta) => {
//     console.log(respuesta);
//   })
//   .catch((error) => {
//     console.log("se rechazó");
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("se terminó el manejo de la promesa");
//   });

// const obtenerUsuarios = new Promise((resolve, reject) => {
//   // resolve("todo salió ok");
//   reject("todo salio mal");
// });

// obtenerUsuarios
//   .then((respuesta) => {
//     alert(respuesta);
//   })
//   .catch((error) => {
//     alert(error);
//   });

//ASYNC - AWAIT

const obtenerCategorias = new Promise((resolve, reject) => {
  let estaLogeado = true;
  if (estaLogeado) {
    resolve([{}, {}, {}]);
  } else [reject("primero inicia sesión")];
});

//const manejarCategorias = async () => {
//  let categorias = await obtenerCategorias;
//  console.log(categorias);
//};

const manejarCategorias = async () => {
  try {
    let categorias = await obtenerCategorias;
    console.log("salio bien", categorias);
  } catch (error) {
    console.log("salio mal", error);
  }
};

manejarCategorias();

const obtenerPost = fetch("https://jsonplaceholder.typicode.com/posts");
// obtenerPost
//   .then((res) => res.json())
//   .then((res) => {
//     console.log(res);
//   });

const manejarPost = async () => {
  try {
    let res = await obtenerPost;
    let post = await res.json();
    console.log(post);
  } catch (error) {
    console.log(error);
  }
};

manejarPost();
