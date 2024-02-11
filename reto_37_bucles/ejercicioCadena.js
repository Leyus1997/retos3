ejecutarPrueba1 =function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);

}
ejecutarPrueba2 =function(){
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    invertirCadena(mensaje);
}

recorrerCadena = function(cadena){
//0123
//juan
let caracter;
//este llega hasta 3
//cadena.length = 4
//posicion < 4
//por que cuenta el total de string
for (let posicion = 0; posicion < cadena.length; posicion++) {
    //charAt captura la posicion de la cada letra y posicion recorre uno por uno
    caracter = cadena.charAt(posicion);
    console.log("Caracter "+caracter+" posicion "+posicion);
}
//este llega hasta 3
//cadena.length = 3 
//posicion <=3
for (let posicion = 0; posicion <= cadena.length-1; posicion++) {
    caracter = cadena.charAt(posicion);
    console.log("CARACTER "+caracter+" posicion "+posicion);
}
}
invertirCadena=function(cadena){
let letra;
let resultado = "";
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        letra = cadena.charAt(posicion);
        
        resultado = resultado+letra;
        mostrarTexto("lblResultado",resultado);
    }
}



