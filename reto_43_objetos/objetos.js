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