//Funciones para enviar objetos al array
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

//🖼️Funcion que creamos que se ocupe de renderizar las tarjetas de producto
const renderizarProductos = () => {
  //Agarramos el div para meter las tarjetas
  // const main = document.getElementById("main-productos");
 const contenedorProductos = document.getElementById("producto-tarjeta");
//creo el contenedor y clase para la section productos
//const contenedorProductos = document.createElement("section");
contenedorProductos.classList.add("productos");


  fetch("./data/productos.json")
    .then((response) => response.json())
    .then((data) =>
      data.forEach((producto) => {
        const tarjetaProducto = document.createElement("article");  

        const imgagenProducto = document.createElement("img");
        imgagenProducto.src = `./${producto.imagen}`;
        imgagenProducto.alt = producto.nombre;

        const tituloProducto = document.createElement("h2");
        tituloProducto.classList.add("titulo-producto");
        tituloProducto.textContent = producto.nombre;

       //Creo desccripcion 
        const descripcionProducto = document.createElement("div");
        descripcionProducto.classList.add("producto-descripcion");
        descripcionProducto.textContent = producto.descripcion;

        const precioProducto = document.createElement("p");
        precioProducto.textContent = `$${producto.precio}`;


       //creo el elemento button y lo asigno a la clase boton
        const botonAgregarProducto = document.createElement("button");
        //lo asigno al nombre de clases de mi html
        botonAgregarProducto.classList.add("boton");
        // usar icono de Font Awesome y texto
        botonAgregarProducto.innerHTML = '<i class="fa-solid fa-cart-shopping" aria-hidden="true"></i>  + Agregar al carrito';

        botonAgregarProducto.addEventListener("click", () => {
          agregarAlCarrito(producto);
        });

        //Sigo adentro del ciclo

        // Armar la estructura de la tarjeta
        tarjetaProducto.appendChild(imgagenProducto);
        tarjetaProducto.appendChild(tituloProducto);
        tarjetaProducto.appendChild(descripcionProducto);
        tarjetaProducto.appendChild(precioProducto);
        tarjetaProducto.appendChild(botonAgregarProducto);

        //Agregamos la tarjeta al DOM
        contenedorProductos.appendChild(tarjetaProducto);
      }),
    )
    .catch((error) => console.log(error));

  //Sigo adentro de la funcion renderizarProductos
};

document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
  renderizarProductos();
});
