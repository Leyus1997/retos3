esMayuscula=function(caracter){
    let codigoAscii;
    codigoAscii = caracter.charCodeAt(0);
    if (codigoAscii >= 65 && codigoAscii<=90) {
        return true;
    } else {
        return false;
    }
}
esDigito=function(numero){
    let numeroAscii;
    numeroAscii= numero.charCodeAt(0);
    if (numeroAscii >=48 && numeroAscii<=57) {
        return true;
    } else {
        return false;
    }
}
esGuion=function(guion){
let condigoGuion;
condigoGuion=guion.charCodeAt(0);
if (condigoGuion==45) {
    return true;
} else {
    return false;
}
}


