let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1722759782",nombre:"Jostin",apellido:"Quintana",sueldo:800.0}
]
let esNuevo = false; 
mostrarOpcionEmpleado=function(){
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarempleados();
    //deshabilitar componentes
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("btnGuardar");
}
mostrarOpcionRol=function(){
    ocultarComponente("divEmpleado");
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
}
mostrarOpcionResumen=function(){
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarComponente("divResumen");
}
mostrarempleados=function(){
    let cmpTabla =document.getElementById("tablaEmpleados");
    let contenidoTabla = "<table><tr>"+
    "<th>CEDULA</th>" +
    "<th>NOMBRE</th>" +
    "<th>APELLIDO</th>" +
    "<th>SUELDO</th>" +
    "</tr>";
    //bucle para mostrar los objetos
    let elementosEmpleados;
    for (let i = 0; i < empleados.length; i++) {
        elementosEmpleados = empleados[i];
        contenidoTabla +=
        "<tr><td>"+ elementosEmpleados.cedula + "</td>"+
        "<td>"+ elementosEmpleados.nombre + "</td>"+
        "<td>"+ elementosEmpleados.apellido + "</td>"+
        "<td>"+ elementosEmpleados.sueldo + "</td>"+
        "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}
ejecutarNuevo=function(){
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    let esNuevo = true

}
buscarEmpleado=function(cedula){
    let elementoEmpleado;
    let empleadoEncontrado = null; //bandera de retorno
    for (let i = 0; i < empleados.length; i++) {
        elementoEmpleado = empleados[i];
        if (elementoEmpleado.cedula==cedula) { //compara si un objeto del arreglo en especifico cedula es igual
                                            //ha cedula que es el parametro que se le pasa de la caja de texto
            empleadoEncontrado = elementoEmpleado;//por lo tanto se almacena este dato y retorna 
            break;                              //se termina el bucle de manera eficiente sin compara con todos los objetos
        }
        
    }
    return empleadoEncontrado; //retorna cliente encontrado pero como objeto completo o null si, no encontro el cliente
}
agregarEmpleado=function(empleado){
    let resultado = buscarEmpleado(empleado.cedula); //manda a buscar si existe el empleado
    if (resultado==null) { //si es null este 
        empleados.push(empleado);//agrega un objeto al arreglo
        alert ("EMPLEADO GUARDADO CORRECTAMENTE");
        return true;
    } else {
        alert ("YA EXISTE UN EMPLEADO CON CEDULA"+empleado.cedula);
        return false;
    }
}
guardar=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorApellido=recuperarTexto("txtApellido");
    let valorSueldo=recuperarFloat("txtSueldo");
    
    let datosEmpleado ={};
    

    if (validarCedula(valorCedula) & validarNombre(valorNombre) & 
    validarApellido(valorApellido) & validarSueldo(valorSueldo)) {
        datosEmpleado.cedula=valorCedula;
        datosEmpleado.nombre=valorNombre;
        datosEmpleado.apellido=valorApellido;
        datosEmpleado.sueldo=valorSueldo;
        
        agregarEmpleado(datosEmpleado);
        mostrarempleados();
    }
     
}

//Validaciones por separado en funciones
validarCedula=function(cedula){
    let logitudCedula=cedula.length;
    if (logitudCedula == 10 && esDigito(cedula)) {
        mostrarTexto("lblErrorCedula","")
        return true;
    }
     else {
        mostrarTexto("lblErrorCedula","ingresar minimo 10 y tienen que ser digitos")
        return false;
    }
}
validarNombre=function(nombre){
    let longitudNombre=nombre.length;
    if (longitudNombre>3 && esMayuscula(nombre)) {
        mostrarTexto("lblErrorNombre","");
        return true;
    }
     else {
        mostrarTexto("lblErrorNombre","ingresar mas de 3 letras en Mayúsculas")
        return false;
    }
}
validarApellido=function(apellido){
    let longitudApellido = apellido.length; 
    if (longitudApellido>3 && esMayuscula(apellido)) {
        mostrarTexto("lblErrorApellido","")
        return true;
    }
     else {
        mostrarTexto("lblErrorApellido","ingresar mas de 3 letras en Mayúsculas")
        return false;
    }
}
validarSueldo=function(sueldo){
    if ( sueldo >= 400 && sueldo<=5000) {
        mostrarTexto("lblErrorSueldo","");
        return true;
    }
    else {
        mostrarTexto("lblErrorSueldo","Ingresar un valor entre 400 y 5000")
    }
}