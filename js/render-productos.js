import { productos } from './productos.js';

function renderProductos() {
    const grid = document.querySelector('.grid-productos');
    if (!grid) return;
    grid.innerHTML = productos.map(producto => `
        <article class="card">
            <div class="card-img">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="card-body">
                <span class="categoria">${producto.categoria}</span>
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <div class="card-footer">
                    <p class="precio">$${producto.precio.toLocaleString()}</p>
                    <a href="producto.html?id=${producto.id}" class="btn">Ver Detalles</a>
                </div>
            </div>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderProductos);