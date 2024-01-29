calcularPromedioNotas=function(){
    let nota1,nota2,nota3,promedio,resultadoFormateado,resultado;
    nota1=recuperarFlotante("txtN1");
    nota2=recuperarFlotante("txtN2");
    nota3=recuperarFlotante("txtN3");
    promedio=calcularPromedio(nota1,nota2,nota3);
    resultadoFormateado=promedio.toFixed(2);
    
}