let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1722759782",nombre:"Jostin",apellido:"Quintana",sueldo:800.0}
]
let esNuevo; 
esNuevo = false; 
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
    esNuevo = true;
   

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
    let desahibilitarGuardar;  
    let empleado;  

    if (validarCedula(valorCedula) & validarNombre(valorNombre) & 
    validarApellido(valorApellido) & validarSueldo(valorSueldo) & esNuevo) {
        datosEmpleado.cedula=valorCedula;
        datosEmpleado.nombre=valorNombre;
        datosEmpleado.apellido=valorApellido;
        datosEmpleado.sueldo=valorSueldo;
        
        desahibilitarGuardar=agregarEmpleado(datosEmpleado);
        mostrarempleados();
        if (desahibilitarGuardar) {
            deshabilitarComponente("btnGuardar");
            esNuevo = false;  
        }else{
            empleado=buscarEmpleado(valorCedula);
            let valorNombre=mostrarTextoEnCaja("txtNombre",empleado.nombre);
            let valorApellido=mostrarTextoEnCaja("txtApellido",empleado.apellido);
            let valorSueldo=mostrarTextoEnCaja("txtSueldo",empleado.sueldo);
            alert ("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarempleados();        // pendiente 
            deshabilitarComponente("txtNombre");
            deshabilitarComponente("txtApellido");
            deshabilitarComponente("txtSueldo");
            deshabilitarComponente("txtCedula");
        }
     
}
}
//Validaciones por separado en funciones
validarCedula = function(cedula){
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
ejecutarBusqueda = function(){
    let valorCedula;
    let empleado;
    valorCedula=recuperarTexto("txtBusquedaCedula");
    empleado=buscarEmpleado(valorCedula);
    if (empleado==null) {
        alert("EMPLEADO NO EXISTE");
    }else{
        
        let valorCedula=mostrarTextoEnCaja("txtCedula",empleado.cedula);
        let valorNombre=mostrarTextoEnCaja("txtNombre",empleado.nombre);
        let valorApellido=mostrarTextoEnCaja("txtApellido",empleado.apellido);
        let valorSueldo=mostrarTextoEnCaja("txtSueldo",empleado.sueldo);
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        deshabilitarComponente("txtCedula");
        
    }
}
limpiar = function(){
    mostrarTextoEnCaja("txtCedula","")
    mostrarTextoEnCaja("txtNombre","")
    mostrarTextoEnCaja("txtApellido","")
    mostrarTextoEnCaja("txtSueldo","")
    mostrarTextoEnCaja("txtBusquedaCedula","")
    esNuevo = true;
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtSutxtApellidoeldo");
    deshabilitarComponente("txtSueldo");
}
buscarPorRol = function(){
    let valorCedula;
    let empleado;
    valorCedula=recuperarTexto("txtBusquedaCedulaRol");
    empleado=buscarEmpleado(valorCedula);
    if (empleado==null) {
        alert("EMPLEADO NO EXISTE");
        mostrarTexto("infoCedula","");
        mostrarTexto("infoNombre","");
        mostrarTexto("infoSueldo","");
    }else{
        mostrarTexto("infoCedula",empleado.sueldo);
        mostrarTexto("infoNombre",empleado.nombre+" "+empleado.apellido);
        mostrarTexto("infoSueldo",empleado.sueldo);
    }

}
//reto rol
calcularAporteEmpleado=function(empleadoSueldo){ 
let calculoAporte = empleadoSueldo*(9.45/100);
return calculoAporte.toFixed(2); // retorna el valor del aporte en este caso es el 9.45%
}
calcularValorAPagar=function(empleadoSueldo,aporteIESS,descuento){
let valorAPagarTotal=empleadoSueldo-(aporteIESS+descuento);
return valorAPagarTotal.toFixed(2); //retorna el valor que se le paga al empleado
}
calcularRol = function(){
 
    let sueldo = recuperarFloatDiv("infoSueldo");
    let descuento = recuperarFloat("txtDescuentos");

    //validar descuentos
    let validarDescuento;
    validarDescuento = validacionDescuentos(descuento,sueldo);
    if(validarDescuento){
    let aporteEmpleado = calcularAporteEmpleado(sueldo);
    mostrarTexto("infoIESS",aporteEmpleado);

    let pagarTotalEmpleado = calcularValorAPagar(sueldo,aporteEmpleado,descuento);
    mostrarTexto("infoPago",pagarTotalEmpleado);
    }else{
        
    }
}
validacionDescuentos = function(descuento,sueldo){
    if (descuento>=0 && descuento<=sueldo) {
        return true;
    } else {
        return false;
    }
}