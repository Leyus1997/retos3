validarPassword = function (password) {
    let longitudCadena = password.length;
    let existeMayuscula = false;
    let existeDigito = false;
    let existeCaracterEspecial = false;
    let esCorrecto= true;
    // Longitud mínima de 8 caracteres y máxima de 16 caracteres
    if (longitudCadena >= 8 && longitudCadena <= 16) {
        
        for (let i = 0; i < longitudCadena; i++) {
            let letra = password.charAt(i);

            if (esMayuscula(letra)) {
                existeMayuscula = true;
            }
            if (esDigito(letra)) {
                existeDigito = true;
            }
            if (esCaracterEspecial(letra)) {
                existeCaracterEspecial = true;
            }
        }
        if (!existeMayuscula) {
            mostrarTexto("lblError1","Debe tener al menos una mayúscula");
            esCorrecto = false;
        }
        if (!existeDigito) {
            mostrarTexto("lblError1","Debe tener al menos un dígito");
            esCorrecto = false;
        }
        if (!existeCaracterEspecial) {
            mostrarTexto("lblError1","Debe tener al menos un carácter especial");
            esCorrecto = false;
        }
        
    } else {
        mostrarTexto("lblError1","La contraseña debe tener entre 8 y 16 caracteres");
        esCorrecto = false;
    }
    return esCorrecto;
}
ejercutarValidacion = function () {
    let estructuraErrores;
    let cadenaPassword;
    cadenaPassword = recuperarTexto("txtPassword")
    estructuraErrores = validarPassword(cadenaPassword);
    if (estructuraErrores) {
        mostrarTexto("lblError1","Password correcto");
    }
}
