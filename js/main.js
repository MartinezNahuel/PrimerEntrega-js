function saludar() {
    const saludo = prompt("Introduzca su nombre y apellido:");
    if (saludo === null || saludo === "") {
        alert("Has cancelado o introducido el nombre vacío");
    } else {
        alert('Hola ' + saludo)
    }
}



saludar();

const productos = [
    { nombre: 'Iphone 6', precio: 24000 },
    { nombre: 'Iphone 6 Plus', precio: 27000 },
    { nombre: 'Iphone 7', precio: 28000 },
    { nombre: 'Iphone 7 Plus', precio: 29000 },
    { nombre: 'Iphone 8', precio: 30000 },
    { nombre: 'Iphone 8 Plus', precio: 31000 },
    { nombre: 'Iphone X', precio: 32000 },
    { nombre: 'Iphone Xs', precio: 33000 },
    { nombre: 'Iphone Xr', precio: 34000 },
    { nombre: 'Iphone 11', precio: 35000 },
    { nombre: 'Iphone 11 Pro', precio: 36000 },
    { nombre: 'Iphone 11 Pro Max', precio: 37000 },
    { nombre: 'Iphone 12 mini', precio: 38000 },
    { nombre: 'Iphone 12 pro', precio: 39000 },
    { nombre: 'Iphone 12 pro max', precio: 40000 },
    { nombre: 'Iphone 13', precio: 41000 },
    { nombre: 'Iphone 13 mini', precio: 42000 },
    { nombre: 'Iphone 13 Pro', precio: 43000 },
    { nombre: 'Iphone 13 Pro Max', precio: 44000 },
    { nombre: 'Iphone 14', precio: 45000 },
    { nombre: 'Iphone 14 Plus', precio: 46000 },
    { nombre: 'Iphone 14 Pro', precio: 47000 },
    { nombre: 'Iphone 14 Pro Max', precio: 48000 },
];


productos.forEach((producto)=> {
console.log(producto);
    })


let productoElegido = prompt("Ingrese el producto que quiere comprar que se encuentre en la lista. Ingrese FIN sino desea comprar.");
alert (JSON.stringify( productos.find((producto) => producto.nombre === productoElegido )));




class Producto {
    constructor(titulo, color, precio) {

        this.titulo = titulo;
        this.color = color;
        this.precio = precio;

    }
}

const producto1 = new Producto("Iphone 6", "negro", 24000);
const producto2 = new Producto ("iphone 6 plus", "negro", 27000);
const producto3 = new Producto("Iphone 7", "negro", 28000);
const producto4 = new Producto("Iphone 7 plus", "negro", 29000);
const producto5 = new Producto("Iphone 8 ", "negro",30000);
const producto6 = new Producto("Iphone 8 plus", "negro", 31000);
const producto7 = new Producto("Iphone x", "negro", 32000);
const producto8 = new Producto("Iphone xs", "negro", 33000);
const producto9 = new Producto("Iphone xr", "negro", 34000);
const producto10 = new Producto("Iphone 11", "negro", 35000);
const producto11 = new Producto("Iphone 11 pro", "negro", 36000);
const producto12 = new Producto("Iphone 11 pro max", "negro", 37000);
const producto13 = new Producto("Iphone 12 mini", "negro", 38000);
const producto14 = new Producto("Iphone 12 pro", "negro", 39000);
const producto15 = new Producto("Iphone 12 pro max", "negro", 40000);
const producto16 = new Producto("Iphone 13", "negro", 41000);
const producto17 = new Producto("Iphone 13 mini", "negro", 42000);
const producto18 = new Producto("Iphone 13 pro", "negro", 43000);
const producto19 = new Producto("Iphone 13 pro max", "negro", 44000);
const producto20 = new Producto("Iphone 14", "negro", 45000);
const producto21 = new Producto("Iphone 14 plus", "negro", 46000);
const producto22 = new Producto("Iphone 14 pro", "negro", 47000);
const producto23 = new Producto("Iphone 14 pro max", "negro", 48000);


