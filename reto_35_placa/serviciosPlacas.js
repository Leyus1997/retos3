vaildarEstructura = Function(placa){
    let hayErrores = false;
    let letra1, letra2, letra3, guion, num1, num2, num3, num4, ultimaPosicion;
    letra1 = placa.charAt(0);
    letra2 = placa.charAt(2);
    letra3 = placa.charAt(3);
    guion = placa.charAt(4);
    num1 = placa.charAt(5);
    num2 = placa.charAt(6);
    num3 = placa.charAt(7);
    //obtener última posición de un string
    ultimaPosicion = cadena.length - 1;
    num4 = placa.charAt(ultimaPosicion);
    //logitud de cadena
    let=longitudCadena;
    longitudCadena=placa.length;
    if (longitudCadena<=7 || longitudCadena>=8) {
        mostrarTexto(idComponenteError,"La placa debe tener 7 u 8 caracteres")
        return true;
    }
    //validar digito
    else if( esDigito(letra1)){
        mostrarTexto(idComponenteError,"El 1er digito deber estar en Mayuscula")
        return true;
    }else if( esDigito(letra2)){
        mostrarTexto(idComponenteError,"El 2do digito deber estar en Mayuscula")
        return true;
    }else if( esDigito(letra3)){
        mostrarTexto(idComponenteError,"El 3er digito deber estar en Mayuscula")
        return true;
    }
    //validar guión
    else if(esGuion(guion)){
        mostrarTexto(idComponenteError,"El 4to digito deber estar en Guión")
        return true;
    }
    //validar numeros
    else if(esDigito(num1)){
        mostrarTexto(idComponenteError,"El 5to digito deber ser un numero")
        return true;
    }else if(esDigito(num2)){
        mostrarTexto(idComponenteError,"El 6to digito deber ser un numero")
        return true;
    }else if(esDigito(num3)){
        mostrarTexto(idComponenteError,"El 7mo digito deber ser un numero")
        return true;
    }else if(esDigito(num4) & num4==7){
        mostrarTexto(idComponenteError,"El 8vo digito deber ser un numero")
        return true;
    }

    return !hayErrores;

}












    return null;
}