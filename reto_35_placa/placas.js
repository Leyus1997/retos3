validarPlaca=function(){
    let erroresEstructura,placa;
    placa=recuperarTexto("txtPlaca");
    erroresEstructura=vaildarEstructura(placa);
     
     if (erroresEstructura == null) {
        mostrarTexto("lblError1","Estructura Valida");//  *****
     } else {
        alert ("Estructura Incorrecta");
     }
}