validarPassword = function(password){
    let longitudCadena;
    //logitud minima de 8 caracteres
    longitudCadena = password.length;


    
    if(longitudCadena>=8 && longitudCadena<=16){
        mostrarTexto("lblError1","La contraseña debe tener entre 8 y 16 caracteres")
    }
    //validar Mayuscula
    else if( esMayuscula(password)){
        mostrarTexto("lblError1","La contraseña debe tener almenos un digito")
        return true;
    }
    //validar numeros
    else if( esDigito(password)){
        mostrarTexto("lblError1","La contraseña debe tener almenos un número")
        return true;
    }
    //validar caracter especial *-_ 
    else if( esCaracterEspecial(password)){
        mostrarTexto("lblError1","La contraseñe debe tener almenos un caracter especial como: *,-,_")
        return true;
    }
    return 0;
}
ejercutarValidacion=function(){
    let estructuraErrores;
    let cadenaPassword;
    cadenaPassword = recuperarTexto("txtPassword")
    estructuraErrores = validarPassword();
    
    if (estructuraErrores==0) {
        mostrarTexto("lblError1","Password correcto");
    } 
}