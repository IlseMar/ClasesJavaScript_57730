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
    <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>`;
    containerCart.appendChild(productCard);
  });
};
renderProducts(carrito);

const eliminarDelCarrito = (id) => {
  console.log(id);
};
