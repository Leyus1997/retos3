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
obtenerProvincia=function(placa){
    let letra1;
    letra1 = placa.charAt(0);
    if (letra1=="A"){
        mostrarTexto("lblError2","Azuay")
    } else if(letra1=="B"){
        mostrarTexto("lblError2","Bolívar")
    }else if(letra1=="U"){
        mostrarTexto("lblError2","Cañar")
    }else if(letra1=="C"){
        mostrarTexto("lblError2","Carchi")
    }else if(letra1=="X"){
        mostrarTexto("lblError2","Cotopaxi")
    }else if(letra1=="H"){
        mostrarTexto("lblError2","Chimborazo")
    }else if(letra1=="O"){
        mostrarTexto("lblError2","El Oro")
    }else if(letra1=="E"){
        mostrarTexto("lblError2","Esmeraldas")
    }else if(letra1=="W"){
        mostrarTexto("lblError2","Galápagos")
    }else if(letra1=="G"){
        mostrarTexto("lblError2","Guayas")
    }else if(letra1=="I"){
        mostrarTexto("lblError2","Imbabura")
    }else if(letra1=="L"){
        mostrarTexto("lblError2","Loja")
    }else if(letra1=="R"){
        mostrarTexto("lblError2","Los Ríos")
    }else if(letra1=="M"){
        mostrarTexto("lblError2","Manabí")
    }else if(letra1=="V"){
        mostrarTexto("lblError2","Morona Santiago")
    }else if(letra1=="N"){
        mostrarTexto("lblError2","Napo")
    }else if(letra1=="S"){
        mostrarTexto("lblError2","Pastaza")
    }else if(letra1=="P"){
        mostrarTexto("lblError2","Pichincha")
    }else if(letra1=="K"){
        mostrarTexto("lblError2","Sucumbíos")
    }else if(letra1=="Q"){
        mostrarTexto("lblError2","Orellana")
    }else if(letra1=="T"){
        mostrarTexto("lblError2","Tungurahua")
    }else if(letra1=="Z"){
        mostrarTexto("lblError2","Zamora Chinchipe")
    }else if(letra1=="Y"){
        mostrarTexto("lblError2","Santa Elena")
    }else{
    mostrarTexto("lblError2","Provincia Incorrecta")
    alert ("Provincia Incorrecta");}
    return null;
}
obtenerTipoVehiculo = function (placa){
    let letra2;
    letra2 = placa.charAt(1);
    if (letra2=="A" || letra2=="Z"){
        mostrarTexto("lblError3","Vehículos comerciales")
    } else if(letra2=="E"){
        mostrarTexto("lblError3","Vehículos gubernamentales")
    }else if(letra2=="X"){
        mostrarTexto("lblError3","Vehículos de uso oficial")
    }else if(letra2=="S"){
        mostrarTexto("lblError3","Vehículos del gobierno provincial")
    }else if(letra2=="M"){
        mostrarTexto("lblError3","Vehículos municipales")
    } 
    else{
        mostrarTexto("lblError3","Vehículo particular")
    }
    return null;
}
obternerDiaPicoYPlaca=function(placa){
    //obtener última posición de un string
    ultimaPosicion = placa.length - 1;
    num4 = placa.charAt(ultimaPosicion);
    if (num4==1 || num4==2) {
        mostrarTexto("lblError4","tiene pico y placa Lunes")
    }else if(num4==3 || num4==4){
        mostrarTexto("lblError4","tiene pico y placa Martes")
    }else if(num4==5 || num4==6){
        mostrarTexto("lblError4","tiene pico y placa Miercoles")
    }else if(num4==7 || num4==8){
        mostrarTexto("lblError4","tiene pico y placa Jueves")
    }else if(num4==9 || num4==0){
        mostrarTexto("lblError4","tiene pico y placa Viernes")
    }
}












 