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
    carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        img: producto.img
    })
    console.log(carrito)
})
});

openCarrito.addEventListener("click", ()=> {
    modalContainer.innerHTML = "";
    modalContainer.style.display= "flex";
    const modalHeader= document.createElement("div");
    modalHeader.className= "modal-header"
    modalHeader.innerHTML= `
    <h1 "class= modal-titulo"> Carrito </h1>
    `
    modalContainer.append(modalHeader);

    const modalButton= document.createElement ("h2");
    modalButton.innerText= "✖";
    modalButton.className= "modal-header-button"
    modalHeader.append(modalButton);

    modalButton.addEventListener("click", ()=> {
        modalContainer.style.display= "none";
    })

    carrito.forEach((producto) => {
    let carritoContent = document.createElement("div")
    carritoContent.className="modal-content"
    carritoContent.innerHTML= `
    <img src= "${producto.img}">
    <h3> "${producto.nombre}" </h3>
    <h3> "${producto.precio}" $  </h3>
    `;
    modalContainer.append(carritoContent);
    });

    const total = carrito.reduce ((acumulado, pr) => acumulado + pr.precio, 0);
    const totalcompra= document.createElement("div");
    totalcompra.className = "total-compra"
    totalcompra.innerHTML = `total a pagar: ${total} $`
    modalContainer.append(totalcompra);
})


