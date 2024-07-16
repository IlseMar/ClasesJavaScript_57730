let containerProduct = document.createElementNS("div");
document.body.append(containerProduct);

const productCart = document.createElement("div");
productCart.innerHTML = `<h2>Hola</h2>,<h2>aca la descripcion</h2>`;
productCart.className = "card";

containerProduct.appendChild(productCart);
