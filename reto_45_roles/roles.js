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