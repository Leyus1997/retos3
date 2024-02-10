validarPlaca=function(){
    let erroresEstructura,placa;
    placa=recuperarTexto("txtPlaca");
    erroresEstructura=vaildarEstructura(placa);
     
     if (erroresEstructura == null) {
        mostrarTexto("lblError1","Estructura Valida");
        obtenerProvincia(placa);
        obtenerTipoVehiculo(placa);
        obternerDiaPicoYPlaca(placa);
     } else {
        alert ("Estructura Incorrecta");
     }
}
limpiar=function(){
    mostrarTexto("lblError1"," ");
    mostrarTexto("lblError2"," ");
    mostrarTexto("lblError3"," ");
    mostrarTexto("lblError4"," ");
}