import { productos } from "./productos.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedorCarrusel = document.querySelector(".carrusel");

  if (!contenedorCarrusel) return;

  const destacados = productos.slice(0, 4);

  destacados.forEach((prod) => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
      <div class="card-img">
        <img src="${prod.imagen}" alt="${prod.nombre}">
        <span class="tag">Destacado</span>
      </div>
      <div class="card-body">
        <h3>${prod.nombre}</h3>
      </div>
      <div class="card-footer">
        <p class="precio">$${prod.precio.toLocaleString("es-AR")}</p>
        <a href="producto.html?id=${prod.id}" class="btn">Ver Detalle</a>
      </div>
    `;

    contenedorCarrusel.appendChild(card);
  });
});

