calcularPromedioNotas=function(){
    let nota1,nota2,nota3,promedio,resultadoFormateado,resultado,resultadoImg;
    nota1=recuperarFlotante("txtN1");
    nota2=recuperarFlotante("txtN2");
    nota3=recuperarFlotante("txtN3");
    promedio=calcularPromedio(nota1,nota2,nota3);
    resultadoFormateado=promedio.toFixed(2);
    
    if (resultadoFormateado>=0 && resultadoFormateado<5) {
        resultadoImg=cambiarImagen("imgResultado","fracaso.gif");
        resultado=cambiarTexto("lblResultado",resultadoFormateado);
        resultado=cambiarTexto("lblTexto","REPROBADO");

    } else if(resultadoFormateado>=5 && resultadoFormateado<8){
        resultadoImg=cambiarImagen("imgResultado","exito.gif");
        resultado=cambiarTexto("lblResultado",resultadoFormateado);
        resultado=cambiarTexto("lblTexto","BUEN TRABAJO");
    }
    else if(resultadoFormateado>=8 && resultadoFormateado<=10){
        resultadoImg=cambiarImagen("imgResultado","excelente.gif");
        resultado=cambiarTexto("lblResultado",resultadoFormateado);
        resultado=cambiarTexto("lblTexto","EXCELENTE");
    }
}