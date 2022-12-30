
const tna = 0.75; 
const año = 365; 
let montoDeInversion;
let plazoNumero;

do{
montoDeInversionIngresado=prompt('Ingrese un monto de inversion mayor o igual a 1000 o presione ESC para finalizar')
const montoDeInversion=parseFloat(montoDeInversionIngresado)
if(montoDeInversion>=1000){
plazoNumero = parseInt( prompt ('Ingrese dias de plazo, Ej: 30, 60, 90 hasta 360. Solo numeracion '))
}else {
    alert('El monto ingresado es invalido')
}
if (plazoNumero ==30 ){
alert ('su interes ganado es de ' + montoDeInversion*tna*plazoNumero/año)}
else if (plazoNumero ==60){
    alert ('suinteres ganado es de ' + montoDeInversion*tna*plazoNumero/año)}
    else if (plazoNumero ==90){
        alert ('su interes ganado es de  ' + montoDeInversion*tna*plazoNumero/año)}
    else if (plazoNumero ==120){
        alert ('su interes ganado es de  ' + montoDeInversion*tna*plazoNumero/año)}
    else if (plazoNumero ==180){
        alert ('su interes ganado es de  ' + montoDeInversion*tna*plazoNumero/año)}
    else if (plazoNumero ==210){
        alert ('su interes ganado es de ' + montoDeInversion*tna*plazoNumero/año)}
    
    else if (plazoNumero ==240){
        alert ('su interes ganado es de  ' + montoDeInversion*tna*plazoNumero/año)}
    
    else if (plazoNumero ==270){
        alert ('su interes ganado es de ' + montoDeInversion*tna*plazoNumero/año)}
    else if (plazoNumero ==300){
            alert ('su interes ganado es  de ' + montoDeInversion*tna*plazoNumero/año)}
    else if (plazoNumero ==330){
            alert ('su interes ganado es de ' + montoDeInversion*tna*plazoNumero/año)}
    else if (plazoNumero ==360){
            alert ('su interes ganado es de  ' + montoDeInversion*tna*plazoNumero/año)}
else{
    alert ('su plazo es invalido')
}
} while (montoDeInversionIngresado !== 'ESC') 


