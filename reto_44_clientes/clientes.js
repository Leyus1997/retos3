let clientes = [
    { cedula: "1234234234", nombre: "Juan", edad: 20 },
    { cedula: "2222222222", nombre: "Mario", edad: 50 },
    { cedula: "3333333333", nombre: "Pepe", edad: 22 }
];

guardarCambios=function(){
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarTexto("txtEdad");

    let datosCliente ={};
    datosCliente.cedula=valorCedula;
    datosCliente.nombre=valorNombre;
    datosCliente.edad=valorEdad;

    modificarCliente(datosCliente);     //llamo a modificar y paso los valores capturados en cajas

    mostrarclientes();
}

modificarCliente=function(cliente){
let clienteEncontrado=buscarCliente(cliente.cedula);    //se manda a buscarcliente con la cedula
if (clienteEncontrado!=null) {              //si cliente encontrado es diferente de null quiere decir que encontro valor
    clienteEncontrado.nombre=cliente.nombre;     //despues de encontra se le pasa los nuevos valores
    clienteEncontrado.edad=cliente.edad;
}
}

ejecutarBusqueda=function(){
  let valorCedula=recuperarTexto("txtCedulaBusqueda"); //recupera el valor que se va a buscar
  let cliente=buscarCliente(valorCedula);
  if (cliente==null) {
    alert("Cliente no encontrado");                  //si retorna null no existe
  } else {
    mostrarTextoEnCaja("txtCedula",cliente.cedula);  //caso contrario se muestran los valores
    mostrarTextoEnCaja("txtNombre",cliente.nombre);
    mostrarTextoEnCaja("txtEdad",cliente.edad);
  }
}

crearCliente = function () {
let valorCedula=recuperarTexto("txtCedula");
let valorNombre=recuperarTexto("txtNombre");
let valorEdad=recuperarInt("txtEdad");

let nuevoCliente ={};
nuevoCliente.cedula=valorCedula;
nuevoCliente.nombre=valorNombre;
nuevoCliente.edad=valorEdad;
agregarCliente(nuevoCliente);      //se pasa el objeto que se captura de las cajas 

}

agregarCliente = function (cliente) {
    let resultado;
    resultado=buscarCliente(cliente.cedula); //manda a buscar el cliente si existe
    if (resultado==null) {                  //si no estes retorna null entonces 
        clientes.push(cliente);             //se agrega el objeto que se le paso
        alert("Cliente agregado");          //alerta cliente agregado
        mostrarclientes();                  //muestra todo el arreglo con los objetos en una tabla
    } else {
        alert("ya existe el cliente con la cedula : "+cliente.cedula);
    }
}
//Validar si la cedula de un cliente se encuentra un numero dentro de un arreglo con objetos
buscarCliente = function (cedula) {
    let elementoCliente;
    let clienteEncontrado = null; //bandera de retorno
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break;
        }
    }
    return clienteEncontrado; //retorna cliente encontrado o null si, no encontro el cliente
}


mostrarclientes = function () {
    let cmpTabla = document.getElementById("tablaClientes"); //recoge el div donde se va mostrar
    let contenidoTabla = "<table><tr>" +                        //Inicio de tabla y emcabezados
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "<tr/>";
    //bucle para mostra los objetos
    let elementoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elementoCliente.cedula + "</td>" +
            "<td>" + elementoCliente.nombre + "</td>" +
            "<td>" + elementoCliente.edad + "</td>" +
            "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}