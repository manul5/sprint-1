import { productos } from "./productos.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedorCarrusel = document.querySelector(".carrusel");
  const btnLeft = document.querySelector(".carrusel-btn.left");
  const btnRight = document.querySelector(".carrusel-btn.right");

  if (!contenedorCarrusel) return;

  const destacados = productos.filter(prod => prod.destacado === true);

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
  // Calcular ancho de card + gap
   function getCardWidth() {
    const card = contenedorCarrusel.querySelector(".card");
    const gap = 16; // Debe coincidir con el gap en CSS
    return card.offsetWidth + gap;
  }

  function scrollCarrusel(direction) {
    const cardWidth = getCardWidth();
    contenedorCarrusel.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  }

  function updateButtons() {
    const maxScroll = contenedorCarrusel.scrollWidth - contenedorCarrusel.clientWidth;
    const currentScroll = contenedorCarrusel.scrollLeft;

    btnLeft.style.display = currentScroll > 0 ? "block" : "none";
    btnRight.style.display = currentScroll < maxScroll ? "block" : "none";

    if (maxScroll <= 0) {
      btnLeft.style.display = "none";
      btnRight.style.display = "none";
    }
    if (maxScroll <= 0) {
      contenedorCarrusel.style.justifyContent = "center";
    } else {
      contenedorCarrusel.style.justifyContent = "flex-start";
    }
  }

  // Eventos
  btnRight.addEventListener("click", () => scrollCarrusel(1));
  btnLeft.addEventListener("click", () => scrollCarrusel(-1));
  contenedorCarrusel.addEventListener("scroll", updateButtons);

  // Inicializar estado de botones
  updateButtons();

  // Recalcular cuando se redimensiona la ventana
  window.addEventListener("resize", updateButtons);
});

