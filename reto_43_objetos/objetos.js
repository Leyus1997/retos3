porbarAtributos=function(){
    let persona = {
        nombre : "Pedro",
        apellido : "Morales",
        edad: 24,
        estaVivo : true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo==false) {
        console.log("no está vivo");
    } else {
        console.log("si está vivo")
    }
}
crearProducto=function(){
    let producto1 = {
        nombre : "Juan",
        precio : 2.50,
        stock : 5,
    }
    let producto2 = {
        nombre : "Pedro",
        precio : 1.50,
        stock : 3,
    }
    console.log(producto1.nombre);
    console.log(producto2.precio);
    if (producto1.stock==producto2.stock) {
        console.log("Ambos productos tiene el mismo stock");
    } else if(producto1.stock>producto2.stock) {
        console.log("Producto 1 tiene el mayor stock");
    }else if(producto1.stock<producto2.stock) {
        console.log("Producto 2 tiene el mayor stock");
    }
}
//__________________________________________
modificarAtributos = function(){
    let cuenta ={
        numero:"5323423423",
        saldo: 0.0
    }
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}
crearCliente=function(){
    let cliente={
        cedula:"171231",
        nombre:"Juan"
    }
    let cliente1={};
    cliente1.nombre="Romeo";
    cliente1.apellido="Salcedo";
    cliente1.cedula="12232313";
}
//Objetos con cuentas y agregar saldo
//______________________________________
porbarIncrementarSaldo=function(){
    let cta={
        numero:"12343",
        saldo:34
    }
    incrementarSaldo(cta,100) //llamar a la funcion y pasar el objeto y el valor de monto
    console.log(cta.saldo); //no se manda a llamar a la funcion sino abjeto cta con el atributo saldo
}
incrementarSaldo=function(cuenta,monto){
    cuenta.saldo+=monto;
}
//Determinar cual es el mayor con objetos y devuel el nombre del mayor
//________________________________________________________________________
probarDeterminarMayor=function(){
    let per1={
        nombre:"Daniel",
        edad:45
    }
    let per2={
        nombre:"Luisa",
        edad:48
    }
    let mayor;
    mayor=determinarMayor(per1,per2);//retorna el objeto con los atributos y se guarde en mayor
    //condicion cual es mayor
    if (mayor!=null) {
        console.log("El mayor es: "+mayor.nombre);//retorno en mayor por lo tanto es atributo y se busca mayor.nombre
    }
}
determinarMayor=function(persona1,persona2){
    if (persona1.edad>persona2.edad) {
        return persona1;
    } else if(persona1.edad<persona2.edad){
        return persona2;
    }else{
        return null;
    }
}