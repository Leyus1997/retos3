let notas = [];
let sumaNotas = 0;
let promedio = 0;
agregarElementos=function(){    //Recomendacion crear arregos con variables de forma gloabal
                                //Ocea afuera de las fucniones pra que se agreguen los valores 
    notas.push(10);
    console.log(notas.length);
}
probarNota=function(){
let notaRecuperada;
notaRecuperada=recuperarInt("txtNota");//recupera de la caja como entero
agregarNota(notaRecuperada);//llama a la funcion para inser el dato dentro del arreglo
}
agregarNota=function(nota){
    notas.push(nota);
    mostrarNotas();
    
}
calcularPromedio=function(){
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        sumaNotas=sumaNotas+notaR;
    }
    promedio = sumaNotas/notas.length;
    return promedio;
}
ejercutarPromedio=function(){
    let resultadoPromedio;
    resultadoPromedio=calcularPromedio();
    mostrarTexto("lblPromedio",resultadoPromedio);
}
generarTabla = function(){
    let contenidoTabla="";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla+="<table> <tr><td>UNO</td></tr>"+
    "<tr><td>DOS</td></tr> </table>";
    cmpTabla.innerHTML=contenidoTabla;
}
mostrarNotas=function(){
    
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTA</th></tr>";
    let miNota;
    for (let i = 0; i < notas.length; i++) {
        miNota = notas[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+=miNota;
        contenidoTabla+="</td></tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}