const  carritonav  = ()=> {
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
    <img src=${producto.img}>
    <h3 class= prod-n> ${producto.nombre}</h3>
    <h3 class= prod-p> $${producto.precio}   </h3>
    <span class= "restar"> - </span>
    <p class = prod-c > Cantidad: ${producto.cantidad}= </p>
    <span class= "sumar"> + </span>
    <p class= prod-t > total: ${producto.cantidad * producto.precio} </p>
    <span class= "p-borrar"> ❌ </span>
    `;
    modalContainer.append(carritoContent);

    let restar= carritoContent.querySelector(".restar");
    restar.addEventListener("click", ()=>{
        if(producto.cantidad!== 1){
        producto.cantidad--;
        }
        SaveLocal();
        carritonav();
    });

    let sumar= carritoContent.querySelector (".sumar");
    sumar.addEventListener("click", ()=>{
        producto.cantidad++;
        SaveLocal();
        carritonav();

    });

    let eliminar= carritoContent.querySelector(".p-borrar");
    eliminar.addEventListener("click", ()=>{
        eliminarProducto(producto.id);
    })
    // let eliminar = document.createElement("span");
    // eliminar.innerText = "❌";
    // eliminar.className = "p-borrar";
    // carritoContent.append(eliminar);

    // eliminar.addEventListener("click", eliminarProducto);

    });



    const total = carrito.reduce ((acumulado, pr) => acumulado + pr.precio * pr.cantidad, 0);
    const totalcompra= document.createElement("div");
    totalcompra.className = "total-compra"
    totalcompra.innerHTML = `total a pagar: ${total} $`
    modalContainer.append(totalcompra);
}

openCarrito.addEventListener("click", carritonav);

const eliminarProducto =(id)=>{
    const foundId = carrito.find((element)=>element.id === id);

    carrito=carrito.filter((carritoId)=>{
        return carritoId !== foundId;
    });
    carritoCounter();
    SaveLocal();
    carritonav();
};

const carritoCounter= ()=> {
    cantidadCarrito.style.display= "block";
    const carritolength= carrito.length;
    localStorage.setItem ("carritoLength", JSON.stringify(carritolength))
    cantidadCarrito.innerText = carrito.length;

    cantidadCarrito.innerText =JSON.parse(localStorage.getItem("carritoLength"))
};

carritoCounter();