obtenerAleatorio = function (){
    let aleatorio,numeroMultiplicado,numeroEntero,valor;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*3;
    numeroEntero=parseInt(numeroMultiplicado);
    valor=numeroEntero+1;
    console,console.log(valor);
    return valor;
}
generarElemento=function(){
    let aleatorio;
    aleatorio=obtenerAleatorio();
    if (aleatorio==1){
        return "piedra";
    }else if(aleatorio==2){
    return "papel";
    }else if(aleatorio==3){
        return "tijera";
    }
}

determinarGanador=function(eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 === eleccionJugador2) {
        mostrarTexto("lblResultado","EMPATE!!");
        return 0; // Empate
    } else if (eleccionJugador1 === "piedra") {
        if (eleccionJugador2 === "tijera") {
            mostrarTexto("lblResultado","GANASTE LA PARTIDA!!");
            return 1; // Gana Jugador 1 (piedra vence a tijera)
            
        } else {
            mostrarTexto("lblResultado","PERDISTE LA PARTIDA!!");
            return 2; // Gana Jugador 2 (papel vence a piedra)
            
        }
    } else if (eleccionJugador1 === "papel") {
        if (eleccionJugador2 === "piedra") {
            mostrarTexto("lblResultado","GANASTE LA PARTIDA!!");
            return 1; // Gana Jugador 1 (papel vence a piedra)
            
        } else {
            mostrarTexto("lblResultado","PERDISTE LA PARTIDA!!");
            return 2; // Gana Jugador 2 (tijera vence a papel)
            
        }
    } else if (eleccionJugador1 === "tijera") {
        if (eleccionJugador2 === "papel") {
            mostrarTexto("lblResultado","GANASTE LA PARTIDA!!");
            return 1; // Gana Jugador 1 (tijera vence a papel)
            
        } else {
            mostrarTexto("lblResultado","PERDISTE LA PARTIDA!!");
            return 2; // Gana Jugador 2 (piedra vence a tijera)
            
        }
    } 
}
generarRuta=function(nombre){
    if (nombre=="piedra") {
        return "imagenes/piedra.jpeg";
    } else if(nombre=="papel") {
        return "imagenes/papel.jpeg";
    }else if(nombre=="tijera") {
        return "imagenes/tijera.jpg"
    }
}