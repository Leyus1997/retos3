//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
let palabraSecreta;
let intentos = 0;
let coincidencias = 0;
let errores = 0;
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
    if (longitudCadena == 5 && esMayuscula(cadena)) {
        palabraSecreta = cadena;
        return palabraSecreta;
    } else {
        alert("Debe ingresar una palabra de 5 letas mayúsculas");
    }
}
mostrarLetra = function (letra,i) {
    
        if (i==0) {
            mostrarTexto("div0",letra)
        }else if(i==1){
            mostrarTexto("div1",letra)
        }else if(i==2){
            mostrarTexto("div2",letra)
        }else if(i==3){
            mostrarTexto("div3",letra)
        }else if(i==4){
            mostrarTexto("div4",letra)
        }
    
}
validar = function(letra){
    let cadenaTextoSecreta,letraIterada;
    cadenaTextoSecreta = recuperarTexto("txtSecreta");
    let letraEncontrada = false;
    for (let i = 0; i <=4; i++) {
        letraIterada=cadenaTextoSecreta.charAt(i);
        if (letraIterada==letra) {
            mostrarLetra(letra,i);
            coincidencias++;
            letraEncontrada = true;
        }
    }
    if (letraEncontrada!=true) {
        errores++;
        alert ("LA LETRA NO ES PARTE DE LA PALABRA");
        mostrarAhorcado(errores);
    }
}
ingresarLetra = function (){
    let cadena;
    let intentosRealizados;
    
    cadena=recuperarTexto("txtLetra");
    if (esMayuscula(cadena)){
        intentos++;
        
        validar(cadena);
        if (coincidencias==5) {
            mostrarImagen("ahorcadoImagen","./ganador.gif");
        } else if(intentos>10){
            mostrarImagen("ahorcadoImagen","./gameOver.gif");
            cadena=mostrarTextoEnCaja("txtSecreta","");
            cadena=mostrarTextoEnCaja("txtLetra","");
        }
        
    } else {
        alert("SOLO SE ACEPTAN MAYUSCULAS");
    }
}
//Implementacion de graficos
mostrarAhorcado = function(errores){
    if (errores==1) {
        mostrarImagen("ahorcadoImagen","./Ahorcado_01.png");
    } else if(errores==2){
        mostrarImagen("ahorcadoImagen","./Ahorcado_02.png");
    }else if(errores==3){
        mostrarImagen("ahorcadoImagen","./Ahorcado_03.png");
    }else if(errores==4){
        mostrarImagen("ahorcadoImagen","./Ahorcado_04.png");
    }else if(errores==5){
        mostrarImagen("ahorcadoImagen","./Ahorcado_05.png");
    }else if(errores==6){
        mostrarImagen("ahorcadoImagen","./Ahorcado_06.png");
    }else if(errores==7){
        mostrarImagen("ahorcadoImagen","./Ahorcado_07.png");
    }else if(errores==8){
        mostrarImagen("ahorcadoImagen","./Ahorcado_08.png");
    }else if(errores==9){
        mostrarImagen("ahorcadoImagen","./Ahorcado_09.png");
    }
}


