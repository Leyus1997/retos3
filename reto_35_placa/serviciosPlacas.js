vaildarEstructura = function(placa){
    let hayErrores = false;
    let letra1, letra2, letra3, guion, num1, num2, num3, num4, ultimaPosicion;
    letra1 = placa.charAt(0);
    letra2 = placa.charAt(1);
    letra3 = placa.charAt(2);
    guion = placa.charAt(3);
    num1 = placa.charAt(4);
    num2 = placa.charAt(5);
    num3 = placa.charAt(6);
    //obtener última posición de un string
    ultimaPosicion = placa.length - 1;
    num4 = placa.charAt(ultimaPosicion);
    //logitud de cadena
    
    let longitudCadena=placa.length;
    if (longitudCadena!=7 && longitudCadena!=8) {
        mostrarTexto("lblError1","La placa debe tener 7 u 8 caracteres")
        return true;
    }
    //validar digito
    else if( esMayuscula(letra1)){
        mostrarTexto("lblError1","El 1er digito deber estar en Mayuscula")
        return true;
    }else if( esMayuscula(letra2)){
        mostrarTexto("lblError1","El 2do digito deber estar en Mayuscula")
        return true;
    }else if( esMayuscula(letra3)){
        mostrarTexto("lblError1","El 3er digito deber estar en Mayuscula")
        return true;
    }
    //validar guión
    else if( esGuion(guion)){
        mostrarTexto("lblError1","El 4to digito deber estar en Guión")
        return true;
    }
    //validar numeros
    else if( esDigito(num1)){
        mostrarTexto("lblError1","El 5to digito deber ser un numero")
        return true;
    }else if( esDigito(num2)){
        mostrarTexto("lblError1","El 6to digito deber ser un numero")
        return true;
    }else if( esDigito(num3)){
        mostrarTexto("lblError1","El 7mo digito deber ser un numero")
        return true;
    }else if( esDigito(num4) & num4==7){
        mostrarTexto("lblError1","El 8vo digito deber ser un numero")
        return true;
    }
    return null;
}












 