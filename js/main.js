const tarjetas = document.getElementById("tarjetaContenedor")
const openCarrito= document.getElementById("open-carrito")
const modalContainer= document.getElementById ("modal-container")
const cantidadCarrito= document.getElementById ("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts= async ()=>{
    const response = await fetch("data.json");
    const data = await response.json();
    data.forEach((producto) => {
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
        } else{
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                img: producto.img,
                cantidad: producto.cantidad,
            });
            }
            console.log(carrito);
            carritoCounter();
            SaveLocal();
            Toastify({
                text: "Producto agregado",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                background: "linear-gradient(to right, #000, aliceblue)",
                borderRadius: "2rem",
                x: "1.5rem",
                y: "1.5rem",
                fontSize: "1rem",
                textTranform: "uppercase",
                
                },
                onClick: function(){} // Callback after click
                }).showToast();
        
        }) ;
        }); 
    
};
getProducts();



const SaveLocal= ()=>{

    localStorage.setItem("carrito",JSON.stringify (carrito));
}

