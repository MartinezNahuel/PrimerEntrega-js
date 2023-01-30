// function saludar() {
//     const saludo = prompt("Introduzca su nombre y apellido:");
//     if (saludo === null || saludo === "") {
//         alert("Has cancelado o introducido el nombre vacío");
//     } else {
//         alert('Hola ' + saludo)
//     }
// }

// saludar();

// const productos = [
//     'Iphone X',
//     'Iphone Xs',
//     'Iphone Xr',
//     'Iphone 11',
//     'Iphone 11 Pro',
//     'Iphone 11 Pro Max',
//     'Iphone 12 mini',
//     'Iphone 12 pro',
//     'Iphone 12 pro max',
//     'Iphone 13',
//     'Iphone 13 mini',
//     'Iphone 13 Pro',
//     'Iphone 13 Pro Max',
//     'Iphone 14',
//     'Iphone 14 Plus',
//     'Iphone 14 Pro',
//     'Iphone 14 Pro Max',
// ];


// class Producto {
//     constructor(nombre, color, precio) {

//         this.nombre = nombre;
//         this.color = color;
//         this.precio = parseFloat(precio);
//     }
    
// }


// const producto1 = new Producto("Iphone x", "negro", 32000);
// const producto2 = new Producto("Iphone xs", "negro", 33000);
// const producto3 = new Producto("Iphone xr", "negro", 34000);
// const producto4 = new Producto("Iphone 11", "negro", 35000);
// const producto5 = new Producto("Iphone 11 pro", "negro", 36000);
// const producto6 = new Producto("Iphone 11 pro max", "negro", 37000);
// const producto7 = new Producto("Iphone 12 mini", "negro", 38000);
// const producto8 = new Producto("Iphone 12 pro", "negro", 39000);
// const producto9 = new Producto("Iphone 12 pro max", "negro", 40000);
// const producto10 = new Producto("Iphone 13", "negro", 41000);
// const producto11 = new Producto("Iphone 13 mini", "negro", 42000);
// const producto12 = new Producto("Iphone 13 pro", "negro", 43000);
// const producto13 = new Producto("Iphone 13 pro max", "negro", 44000);
// const producto14 = new Producto("Iphone 14", "negro", 45000);
// const producto15 = new Producto("Iphone 14 plus", "negro", 46000);
// const producto16 = new Producto("Iphone 14 pro", "negro", 47000);
// const producto17 = new Producto("Iphone 14 pro max", "negro", 48000);


// let verproductos;
// do {
//     verproductos = prompt("Ingrese el producto que quiere comprar que se encuentre en la lista. Ingrese FIN sino desea comprar. \n " + productos.join(' \n ') )
//     if( verproductos == 'Iphone x'){
//         alert (JSON.stringify ((producto1)));
//     }else if ( verproductos == 'Iphone xs') {
//         alert (JSON.stringify ((producto2)));
//     }else if ( verproductos == 'Iphone xr') {
//         alert (JSON.stringify ((producto3)));
//     }else if ( verproductos == 'Iphone 11') {
//         alert (JSON.stringify ((producto4)));
//     }else if ( verproductos == 'Iphone 11 Pro') {
//         alert (JSON.stringify ((producto5)));
//     }else if ( verproductos == 'Iphone 11 Pro Max') {
//         alert (JSON.stringify ((producto6)));
//     }else if ( verproductos == 'Iphone 12 Mini') {
//         alert (JSON.stringify ((producto7)));
//     }else if ( verproductos == 'Iphone 12 Pro') {
//         alert (JSON.stringify ((producto8)));
//     }else if ( verproductos == 'Iphone 12 Pro Max') {
//         alert (JSON.stringify ((producto9)));
//     }else if ( verproductos == 'Iphone 13') {
//         alert (JSON.stringify ((producto10)));
//     }else if ( verproductos == 'Iphone 13 Mini') {
//         alert (JSON.stringify ((producto11)));
//     }else if ( verproductos == 'Iphone 13 Pro') {
//         alert (JSON.stringify ((producto12)));
//     }else if ( verproductos == 'Iphone 13 Pro Max') {
//         alert (JSON.stringify ((producto13)));
//     } else if ( verproductos == 'Iphone 14 Plus') {
//             alert (JSON.stringify ((producto14)));
//     }else if ( verproductos == 'Iphone 14 Pro') {
//             alert (JSON.stringify ((producto15)));
//     }else if ( verproductos == 'Iphone 14 Pro Max') 
//             alert (JSON.stringify ((producto16)));
//         {
//     }
//     } while (verproductos !== 'FIN')

