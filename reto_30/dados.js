let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    mostrarCara(aleatorio);
    modificarPuntos(aleatorio);
    modificarLanzamientos();
}

modificarPuntos = function(numero) {
    puntos = puntos+numero;
    cambiarTexto("lblPuntos", puntos);
    //Si el jugadorobtiene más de 20 puntos
    //Mostrar un mensaje GANASTE!!
    //invocar a limpiar
    if (puntos > 20) {
        cambiarTexto("lblMeta", "¡GANASTE!");
        limpiar();
    }
};

//no recibe parámetros
//Resta 1 la variable lanzamientos, Guarda el resultado en la misma variable
//Y muestra en pantalla
modificarLanzamientos = function() {
    lanzamientos--;
    cambiarTexto("lblLanzamientos", lanzamientos);
    //Sí lanzamientos llega a 0
    //Mostrar en pantalla en mensaje GAME OVER
    if (lanzamientos === 0) {
        cambiarTexto("lblMeta", "¡GAME OVER!");
        limpiar();
    }
};

limpiar = function() {
    puntos = 0;
    lanzamientos = 5;
    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    cambiarImagen("imgDado", "");
    
};

mostrarCara = function(numero) {
    if (numero === 1) {
        cambiarImagen("imgDado", "dados1.png");
    } else if (numero === 2) {
        cambiarImagen("imgDado", "dados2.png");
    } else if (numero === 3) {
        cambiarImagen("imgDado", "dados3.png");
    } else if (numero === 4) {
        cambiarImagen("imgDado", "dados4.png");
    } else if (numero === 5) {
        cambiarImagen("imgDado", "dados5.png");
    } else if (numero === 6) {
        cambiarImagen("imgDado", "dados6.png");
    }
}
//Crear una fucnio llamda lanzar dado
//No recibe parametros
//Retorna un numero aleatorio entre 1 y 6
lanzarDado = function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aleatorio=Math.random();//entre 0 y 1
    numeroMultiplicado=(aleatorio*6);
    numeroEntero=parseInt(numeroMultiplicado);//entre 0 y 5
    valorDado=numeroEntero+1; //entre 1 y 6
    return valorDado;
}
