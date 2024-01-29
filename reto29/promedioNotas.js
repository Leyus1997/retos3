calcularPromedioNotas=function(){
    let nota1,nota2,nota3,promedio,resultadoFormateado,resultado,resultadoImg;
    nota1=recuperarFlotante("txtN1");
    nota2=recuperarFlotante("txtN2");
    nota3=recuperarFlotante("txtN3");
    promedio=calcularPromedio(nota1,nota2,nota3);
    resultadoFormateado=promedio.toFixed(2);
    
    if (resultadoFormateado>6.99) {
        resultadoImg=cambiarImagen("imgResultado","exito.gif");
        resultado=cambiarTexto("lblResultado",resultadoFormateado);
    } else {
        resultadoImg=cambiarImagen("imgResultado","fracaso.gif");
        resultado=cambiarTexto("lblResultado",resultadoFormateado);
    }
}