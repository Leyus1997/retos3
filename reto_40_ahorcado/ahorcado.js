//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let letrasEncontradas = 0;
esMayuscula = function (caracter) {
    let codigoAscii;
    codigoAscii = caracter.charCodeAt(0);
    if (codigoAscii >= 65 && codigoAscii <= 90) {
        return true;
    } else {
        return false;
    }
}
guardarPalabra = function () {
    let longitudCadena;
    let cadena;
    cadena = recuperarTexto("txtSecreta");
    longitudCadena = cadena.length;
    if (longitudCadena == 5 && esMayuscula(cadena)) {//falta colocar la cadena
        palabraSecreta = cadena;
        return palabraSecreta;
    } else {
        alert("Debe ingresar una palabra de 5 letas mayúsculas");
    }
}
mostrarLetra = function (letra,i) {
    
    let posicionLetra;
        posicionLetra = ("div" + i);//captura el div correspondiente al cuadra a mostrar
        mostrarTexto(posicionLetra, letra);
    
}
validar = function(letra){
    let cadenaTextoSecreta,letraIterada;
    cadenaTextoSecreta = recuperarTexto("txtSecreta");
    
    for (let i = 0; i <=4; i++) {
        letraIterada=cadenaTextoSecreta.charAt(i);
        if (letraIterada==letra) {
            mostrarLetra(letra,i);
            return letrasEncontradas++;
        }  
    }
}
ingresarLetra = function (){
    let cadena;
    
    cadena=recuperarTexto("txtLetra");
    if (esMayuscula(cadena)){
        validar(cadena);
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}

