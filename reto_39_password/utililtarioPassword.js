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
esCaracterEspecial=function(guion){
let codigoAscii;
codigoAscii=guion.charCodeAt(0);
console.log = codigoAscii;
if (codigoAscii==45 | codigoAscii==42 |codigoAscii==95) {
    return true;
} else {
    return false;
}
}













contarMayusculas=function(cadena){
    let letra;
    let contadorMayusculas=0;
    for (let i = 0; i < cadena.length; i++) {
      letra=cadena.charAt(i);
      if (esMayuscula(letra)) {
        contadorMayusculas=contadorMayusculas+1;  //contadorMayusculas++
      }        
    }
    console.log(contadorMayusculas);
}

