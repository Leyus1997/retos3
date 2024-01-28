jugar=function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if (aleatorio>3) {
        console.log("Es mayor a 3 :")
        console.log("Ganaste")
        cambiarTexto("lblRespuesta","Ganaste ->");
    }
    else {
        console.log("Es menor a 3 :")
        console.log("Perdiste")
        cambiarTexto("lblRespuesta","Perdiste ->");
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
