calcularDescuento = function (monto, porcentajeDescuento) {
    let valorDescuento;
    valorDescuento = monto * (porcentajeDescuento / 100);
    return valorDescuento;
}
calcularIVA = function (ValorSubtotal, valorDesceunto) {
    let presioSinIva, Iva;
    presioSinIva = ValorSubtotal - valorDesceunto;
    Iva = presioSinIva * 12 / 100;

    return Iva;
}
calcularSubtotal = function (precio, cantidad) {
    let calculoSubtotal;
    calculoSubtotal = precio * cantidad;
    return calculoSubtotal;
}
calcularTotal = function (subtotal, descuento, iva) {
    let calculoTotal;
    calculoTotal = (subtotal - descuento) + iva;
    return calculoTotal;
}
calcularDescuentoPorVolumen = function (subtotal, cantidad) {
    let descuento;
    if (cantidad < 3) {
        descuento = subtotal * (0);
        return descuento;                //No tiene descuento
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = subtotal * (3 / 100);     //3% de descuento
        return descuento;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = subtotal * (4 / 100);     //4% de descuento
        return descuento;
    } else if (cantidad >= 12) {
        descuento = subtotal * (5 / 100);     //5% de descuento
        return descuento;
    }
}

esProductoValido = function (producto, idComponenteError) {
    let hayErrores = false;
    let tamanio;
    tamanio=producto.length;
    if (producto=="" || tamanio>10) {
        mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO Y MENOR DE 10 CARACTERES");
        hayErrores=true;
    }
    return !hayErrores;
}
esCantidadValida = function (cantidad, idComponenteError) {
    let hayErrores = false;
    if (isNaN(cantidad) || cantidad<=0 || cantidad>=100) {
        mostrarTexto(idComponenteError,"CANTIDAD DEBE SER ENTRE 0 Y 100");
        hayErrores=true;
    }
    return !hayErrores;
}
esPrecioValido = function (precio, idComponenteError) {
    let hayErrores = false;
    if (isNaN(precio) || precio<=0 || precio>=50) {
        mostrarTexto(idComponenteError,"EL PRECIO DEBE SER ENTRE 0 Y 50");
        hayErrores=true;
    }
    return !hayErrores;
}