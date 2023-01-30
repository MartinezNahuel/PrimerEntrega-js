const tarjetas = document.getElementById("tarjetaContenedor")
let carrito = [];

productos.forEach((producto) => {
let container= document.createElement("div");
container.innerHTML= `
<img src= "${producto.img}">
<h3> ${producto.nombre} </h3>
<p> ${producto.precio} </p>
`;

tarjetas.append(container);

})

