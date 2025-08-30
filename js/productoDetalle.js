import { productos } from "./productos.js";

// obtener el id del producto
const urlParams = new URLSearchParams(window.location.search);
const productoId = parseInt(urlParams.get('id'));

console.log(productoId);

const producto = productos.find(prod => prod.id === productoId);

if(producto){
    document.querySelector('.producto-imagen').src = producto.imagen;
    document.querySelector('.producto-imagen').alt = producto.nombre;

    document.querySelector('.producto-categoria').textContent = producto.categoria;
    document.querySelector('.producto-nombre').textContent = producto.nombre;
    document.querySelector('.producto-descripcion').textContent = producto.descripcion;
    document.querySelector('.producto-precio').textContent = `$${producto.precio.toLocaleString('es-AR')}`;

    const ul = document.querySelector('.producto-especificaciones ul');
    ul.innerHTML = ''; // limpiar 
    producto.especificaciones.forEach(espec => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${espec.titulo}:</strong> ${espec.valor}`;
        ul.appendChild(li);
    });

    document.title = producto.nombre;
}else{
    document.querySelector('main').innerHTML = '<p>Producto no encontrado.</p>'
}