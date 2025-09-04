const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const buscador = document.getElementById('buscador');
  const boton = document.getElementById('btn-buscar');
  const input = buscador.querySelector('input');

  boton.addEventListener('click', (e) => {
    e.stopPropagation();
    buscador.classList.toggle('active');

    if (buscador.classList.contains('active')) {
      // enfocamos el input cuando se despliega
      setTimeout(() => input.focus(), 150);
    }
  });

  // clic fuera cierra
  document.addEventListener('click', (e) => {
    if (!buscador.contains(e.target)) {
      buscador.classList.remove('active');
    }
  });
