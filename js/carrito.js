const carritoIcon = document.querySelector('.icono');

let contador = parseInt(localStorage.getItem('contadorCarrito')) || 0;
mostrarContador();

const btnCarrito = document.getElementById('btn-carrito');
if (btnCarrito) {
  btnCarrito.addEventListener('click', () => {
    contador++;
    localStorage.setItem('contadorCarrito', contador);
    mostrarContador();
    alert('Producto añadido al carrito'); 
  });
}

function mostrarContador() {
  let contadorBadge = document.querySelector('.contador-carrito');
  if (!contadorBadge) {
    contadorBadge = document.createElement('span');
    contadorBadge.classList.add('contador-carrito');
    contadorBadge.style.cssText = `
      background:#A0522D;
      color:white;
      border-radius:50%;
      padding:4px 8px;
      position:absolute;
      bottom:15px;
      right:-8px;
      font-size:8px;
    `;
    carritoIcon.style.position = 'relative';
    carritoIcon.appendChild(contadorBadge);
  }
  contadorBadge.textContent = contador;
}