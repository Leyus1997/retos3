let puntosUsuario = 0;
let puntosComputador = 0;


jugar=function(string){
    let elemento,ganador,rutaImagen;
    elemento=generarElemento();
    //Mostra imagen
    rutaImagen=generarRuta(elemento);
    mostrarImagen("lblImagenComputador",rutaImagen);
    //devuelve el ganador
    ganador=determinarGanador(string,elemento);

    //mostrar puntos
    if (ganador==1) {
        puntosUsuario+=1;

    } else if(ganador==2){
        puntosComputador+=1;
    }
    mostrarTexto("lblUsuario",puntosUsuario);
    mostrarTexto("lblComputador",puntosComputador);
}