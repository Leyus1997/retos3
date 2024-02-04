calcularTasaInteres=function(ingresoAnual){
    if (ingresoAnual>0 && ingresoAnual<300000) {
        return 16/100; //tasa de interés 16%
    } else if(ingresoAnual>=300000 && ingresoAnual<500000) {
        return 15/100; //tasa de interés 15%
    }else if(ingresoAnual>=500000 && ingresoAnual<1000000) {
        return 14/100; //tasa de interés 14%
    }else if(ingresoAnual>=1000000 && ingresoAnual<2000000) {
        return 13/100; //tasa de interés 13%
    }else if(ingresoAnual>=2000000) {
        return 12/100; //tasa de interés 12%
    }
}

calcularCapacidadPago=function(edad,ingresos,egresos){
    let ganancia; 
    if(edad>50){
        ganancia=egresos-ingresos; //capacidad de pago del 30%
        return ganancia*(30/100);
    }else if(edad<=50) {
        ganancia=egresos-ingresos; //capacidad de pago del 40 %
        return ganancia*(40/100);
    }
}

calcularDescuento=function(precio,cantidad){
    let subtotal,descuento,total;
    if(cantidad<3){
    subtotal=precio*cantidad; 
    return subtotal;                    //No tiene descuento
    }else if(cantidad>=3 && cantidad<=5){
        subtotal=precio*cantidad;
        descuento=subtotal*(2/100);     //2% de descuento
        total=subtotal-descuento;
        return total;
    }else if(cantidad>=6 && cantidad<=11){
        subtotal=precio*cantidad;
        descuento=subtotal*(3/100);     //3% de descuento
        total=subtotal-descuento;
        return total;
    }else if(cantidad>=12){
        subtotal=precio*cantidad;
        descuento=subtotal*(4/100);     //4% de descuento
        total=subtotal-descuento;
        return total;
    }
}
determinarCorresterol=function(nivelCoresterol){
    let categoriaCoresterol;
    if(nivelCoresterol<100){
        categoriaCoresterol="Óptimo (lo mejor  para la salud)";
        return categoriaCoresterol;                   
        }else if(nivelCoresterol>=100 && nivelCoresterol<=129){
            categoriaCoresterol="Casí óptimo";
            return categoriaCoresterol;
        }else if(nivelCoresterol>=130 && nivelCoresterol<=159){
            categoriaCoresterol="Límite superios del rango normal";
            return categoriaCoresterol;
        }else if(nivelCoresterol>=160 && nivelCoresterol<=189){
            categoriaCoresterol="Alto";
            return categoriaCoresterol;
        }else if(nivelCoresterol>190){
            categoriaCoresterol="Muy alto";
            return categoriaCoresterol;
        }
} 
validarClave=function(clave){
    let tamanio;
    tamanio=clave.length;
    if(tamanio>=8 && tamanio<=16){
        return true;
    }else{
        return false;
    }
}
esMayuscula=function(caracter) {
    let codigoAscii;
    codigoAscii = caracter.charCodeAt(0);
    if (codigoAscii >= 65 && codigoAscii <= 90) {
        return true;
    } else {
        return false;
    }
}
esMinuscula=function(caracter) {
    let codigoAscii;
    codigoAscii = caracter.charCodeAt(0);
    if (codigoAscii >= 97 && codigoAscii <= 122) {
        return true;
    } else {
        return false;
    }
}
esDigito=function(caracter) {
    let codigoAscii;
    codigoAscii = caracter.charCodeAt(0);
    if (codigoAscii >= 48 && codigoAscii <= 57) {
        return true;
    } else {
        return false;
    }
}
darPermiso=function(notaMatematica, notaFisica,notaGeometria){
    
    if (notaMatematica>90 ||notaFisica>90 ||notaGeometria>90) {
        return true;
    } else {
        return false;
    }
}
otorgarPermiso=function(notaMatematica, notaFisica,notaGeometria){
    
    if (notaMatematica>90 ||notaFisica>90 && notaGeometria>80) {
        return true;
    } else {
        return false;
    }
}
dejarSalir=function(notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica > 90 && notaFisica > 90 && notaGeometria > 90 && notaFisica > notaMatematica) {
        return true;
    } else {
        return false;
    }
}
