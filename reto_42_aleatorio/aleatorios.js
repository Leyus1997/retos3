let aleatorios =[]; 
generarAleatorio = function (){
    let aleatorio,numeroMultiplicado,numeroEntero,valor;
    aleatorio=Math.random();
    numeroMultiplicado=aleatorio*100;
    numeroEntero=parseInt(numeroMultiplicado);
    valor=numeroEntero+1;
    return valor;
}
validar=function(){
    let numeroEntre;
    numeroEntre=recuperarInt("txtValor");
    if (numeroEntre>=5 && numeroEntre<=20) {
        interarNumeros(numeroEntre);  
    } else {
        alert ("Ingrese un numero entre 5 y 20 para generar un arreglo");
    }
    

   
}
interarNumeros=function(max){
    
    for (let indice = 0; indice < max; indice++) {
        agregarElementosAleatorios();
        console.log = aleatorios[indice];
    }
    mostrarResultados();
}
agregarElementosAleatorios=function(){
    let numeroAleatorio;
    numeroAleatorio=generarAleatorio();
    aleatorios.push(numeroAleatorio);
}

mostrarResultados=function(){

    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTA</th></tr>";
    let miNota;
    for (let i = 0; i < aleatorios.length; i++) {
        miNota = aleatorios[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</td></tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}