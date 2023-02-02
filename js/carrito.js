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
    <img src= "${producto.img}">
    <h3> "${producto.nombre}" </h3>
    <h3> "${producto.precio}" $  </h3>
    `;
    modalContainer.append(carritoContent);

    let eliminar = document.createElement("span");
    eliminar.innerText = "❌";
    eliminar.className = "p-borrar";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);

    });



    const total = carrito.reduce ((acumulado, pr) => acumulado + pr.precio, 0);
    const totalcompra= document.createElement("div");
    totalcompra.className = "total-compra"
    totalcompra.innerHTML = `total a pagar: ${total} $`
    modalContainer.append(totalcompra);
}

openCarrito.addEventListener("click", carritonav);

const eliminarProducto =()=>{
    const foundId = carrito.find((element)=>element.id);

    carrito=carrito.filter((carritoId)=>{
        return carritoId !== foundId;
    });

    carritonav();
}