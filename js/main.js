console.log("funciona");

const productos = [
  {
    id: 1,
    category: "Computación",
    description: "Una computadora portátil con procesador Intel Core i7.",
    image: "https://via.placeholder.com/100",
    price: 1199.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Computadora Portátil",
  },
  {
    id: 2,
    category: "Computación",
    description: "Un monitor de 27 pulgadas con resolución 4K.",
    image: "https://via.placeholder.com/100",
    price: 399.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Monitor 4K",
  },
  {
    id: 3,
    category: "Computación",
    description: "Un teclado mecánico con retroiluminación RGB.",
    image: "https://via.placeholder.com/100",
    price: 89.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Teclado Mecánico",
  },
  {
    id: 4,
    category: "Computación",
    description: "Una impresora multifuncional con conexión WiFi.",
    image: "https://via.placeholder.com/100",
    price: 149.99,
    rating: {
      rate: 3.9,
      count: 120,
    },
    title: "Impresora Multifuncional",
  },
];
let carrito = [];

const renderProducts = (arrayProductos) => {
  let containerProducts = document.getElementById("products-container");
  containerProducts.innerHTML = "";

  arrayProductos.forEach((producto) => {
    let productCard = document.createElement("div");
    productCard.className = "producto";
    productCard.innerHTML = `
    <img src=${producto.image}>
    <h2>${producto.title}</h2>
    <p>${producto.description}</p>
    <p class="price">${producto.price}</p>
    <button onclick="agregarAlCarrito(${producto.id})">Agregar al carrito</button>`;
    containerProducts.appendChild(productCard);
  });
};
renderProducts(productos);

const agregarAlCarrito = (id) => {
  let producto = productos.find((elemento) => elemento.id === id);
  carrito.push(producto);
  console.log(carrito);
};
