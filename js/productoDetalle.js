import { productos } from "./productos.js";

const cargarProducto = async () => {
    const loader = document.getElementById('loader');
    const article = document.querySelector('article');
  try {

    loader.style.display = 'block'; 
    loader.style.textAlign = 'center';
    loader.style.padding = '20px';
    loader.style.fontSize = '18px';

    article.classList.add('oculto');

    await new Promise(resolve => setTimeout(resolve, 500));

    // obtener el id del producto
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = parseInt(urlParams.get("id"));

    console.log(productoId);

    const producto = productos.find((prod) => prod.id === productoId);

    if (producto) {
        document.querySelector(".producto-imagen").src = producto.imagen;
        document.querySelector(".producto-imagen").alt = producto.nombre;

        document.querySelector(".producto-categoria").textContent = producto.categoria;
        document.querySelector(".producto-nombre").textContent = producto.nombre;
        document.querySelector(".producto-descripcion").textContent = producto.descripcion;
        document.querySelector(".producto-precio").textContent = `$${producto.precio.toLocaleString("es-AR")}`;

        const ul = document.querySelector(".producto-especificaciones ul");
        ul.innerHTML = ""; // limpiar
        producto.especificaciones.forEach((espec) => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${espec.titulo}:</strong> ${espec.valor}`;
            ul.appendChild(li);
        });

        document.title = producto.nombre;

        article.classList.remove('oculto');

    } else {
        
        document.querySelector("main").innerHTML = "<p>Producto no encontrado.</p>";
    }
  }catch (error) {
        console.error("Error al cargar el poducto: " + error)
        document.querySelector("main").innerHTML = '<p>Error al cargar el producto. Intente nuevamente.</p>';
  }finally {
    loader.style.display = 'none';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  cargarProducto();
});