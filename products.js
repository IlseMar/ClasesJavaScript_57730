const products = [
  {
    id: 1,
    title: "Smartphone",
    price: 699.99,
    description:
      "Un smartphone de última generación con pantalla OLED y cámara de 108 MP.",
    category: "Electrónica",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    id: 2,
    title: "Laptop",
    price: 1299.99,
    description: "Una laptop potente con procesador Intel i7 y 16 GB de RAM.",
    category: "Electrónica",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    id: 3,
    title: "Auriculares Inalámbricos",
    price: 199.99,
    description:
      "Auriculares con cancelación de ruido y hasta 20 horas de autonomía.",
    category: "Electrónica",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    id: 4,
    title: "Reloj Inteligente",
    price: 299.99,
    description:
      "Reloj inteligente con monitor de ritmo cardíaco y GPS integrado.",
    category: "Electrónica",
    imageUrl: "https://via.placeholder.com/30",
  },
  {
    id: 5,
    title: "Tablet",
    price: 499.99,
    description:
      "Tablet con pantalla de 10 pulgadas y 64 GB de almacenamiento.",
    category: "Electrónica",
    imageUrl: "https://via.placeholder.com/30",
  },
];

console.log(products);

let containerProducts = document.createElement("section");
document.body.append(containerProducts);
// containerProducts.className=""

// const productCard2 = document.createElement("div");
// productCard2.innerHTML = `<h2${products[1].title}/h2 <h3${products[1].description}</h3>
// h4>${products[1].price}</h4 <img src="" alt=""/`;
// productCard2.className = "card";

// const productCard3 = document.createElement("div");
// productCard3.innerHTML = `<h2${products[2].title}/h2 h3${products[2].description}</h3>
// <4>${products[2].price}</4 <img src="" alt=""/`;
// productCard3.className = "card";

// for (let i = 0; i < products.length; i++) {
//   const productCard = document.createElement("div");
//   productCard.innerHTML = `<h2>${products[i].title}</h2> <h3>${products[i].description}</h3>
// <h4>${products[i].price}</h4> <img src="" alt=""/>`;
//   productCard.className = "card";
//   containerProducts.appendChild(productCard);
// }

products.forEach((element) => {
  const productCard = document.createElement("div");
  productCard.innerHTML = `<div >
        <h2${element.title}</h2>
        <h3>${element.description}</h3>
        <h4>${element.price}</h4>
      </div><img src=${element.imageUrl} alt=""/>`;
  productCard.className = "card";
  containerProducts.appendChild(productCard);
});
