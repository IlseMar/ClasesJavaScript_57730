let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const renderProducts = (arrayProductos) => {
  let containerCart = document.getElementById("container-card");
  containerCart.innerHTML = "";

  arrayProductos.forEach((producto) => {
    let productCard = document.createElement("div");
    productCard.className = "producto";
    productCard.innerHTML = `
    <img src=${producto.image}>
    <h2>${producto.title}</h2>
    <p>${producto.description}</p>
    <p class="price">${producto.price}</p>
    <div class="container-btns">
        <button onclick="restarCantidad(${producto.id})">-</button>
    <p class="price">${producto.quantity}</p>
    <button onclick="sumarCantidad(${producto.id})">+</button></div>
    <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>`;
    containerCart.appendChild(productCard);
  });
};
renderProducts(carrito);

const eliminarDelCarrito = (id) => {
  carrito = carrito.filter((elemento) => elemento.id !== id);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderProducts(carrito);
};

const restarCantidad = (id) => {
  let productoEncontrado = carrito.find((elemento) => elemento.id === id);
  if (productoEncontrado && productoEncontrado.quantity > 1) {
    productoEncontrado.quantity -= 1;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderProducts(carrito);
    Toastify({
      text: "Se eliminó uno",
      duration: 1000,
      gravity: "bottom",
      position: "center",
      backgroundColor: "peru",
    }).showToast();
  } else if (productoEncontrado && productoEncontrado.quantity === 1) {
    eliminarDelCarrito(productoEncontrado.id);
  }
};
const sumarCantidad = (id) => {
  let productoEncontrado = carrito.find((elemento) => elemento.id === id);
  if (productoEncontrado) {
    productoEncontrado.quantity += 1;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderProducts(carrito);
  }
};
