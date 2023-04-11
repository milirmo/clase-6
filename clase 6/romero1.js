let suma = 0;
let total = 0;
let precio = 1;
let descuento = 0;
let recargo = 0;
while (precio != 0) {
    precio = parseInt(prompt("Ingrese el precio de su producto. Al terminar ingrese 0."));
    suma = suma + precio;
}
document.write(suma);
let pago = parseInt(prompt("Ingrese su medio de pago: credito-1, efectivo-2, debito-3."))
if (pago === 1) {
    recargo = (suma * 0.2);
} else {
    if (pago === 2) {
        descuento = (suma * 0.2);
    } else {
        descuento = (suma * 0.1);
    }
}
    alert("Su total a pagar es " + total - descuento + recargo);