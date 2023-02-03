const tarjetas = document.getElementById("tarjetaContenedor")
const openCarrito= document.getElementById("open-carrito")
const modalContainer= document.getElementById ("modal-container")
let carrito = [];

productos.forEach((producto) => {
let container= document.createElement("div");
container.innerHTML= `
<img class= "p-img" src= "${producto.img}">
<h3 class= "p-nombre">  ${producto.nombre} </h3>
<p class= "p-precio"> $ ${producto.precio} </p>
`;
container.className= "p-container";

tarjetas.append(container);

let comprar= document.createElement("button");
comprar.innerText= "comprar";
comprar.className= "p-comprar";
container.append(comprar);

comprar.addEventListener("click", ()=> {

    const repeat= carrito.some((repeatproduct)=> repeatproduct.id === producto.id);

if (repeat){
    carrito.map((prod)=>{
        if(prod.id === producto.id){
            prod.cantidad++;
    }
    });
}
    carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        img: producto.img,
        cantidad: producto.cantidad,
    })
    console.log(carrito);
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));

}) 
}); 