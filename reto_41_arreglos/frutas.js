let frutas=["pera","mazana","banana"];
probarBusqueda=function(){
    let frutaIngresada=recuperarTexto("lblFruta");
    let resultado=buscar(frutaIngresada);
    if (resultado==null) {
        alert("No existe la fruta")
    }else{
        alert(frutaIngresada+" existe en el cesto")
    }
}
buscar=function(fruta){
    let elemento;
    let frutaEncontrada = null;                  //fruta empieza en null
    for (let i = 0; i < frutas.length; i++) {
        elemento=frutas[i];
        if (fruta==elemento) {                  //se termina el bucle si encuentra la fruta
            frutaEncontrada = elemento;
            break;
        }
    }
    return frutaEncontrada;                     //retorna el nombre de la fruta si la encuentra
}

probar1=function(){
for (let i = 0; i <= 10; i++) {
    let imprimir = i+2;
    console.log(imprimir);
}
}
probar1=function(){
    for (let i = 9; i > 0; i--) {
        let imprimir = i-1;
        console.log(imprimir);
    }
}
probar2=function(){
    for (let i = 5; i > 0; i--) {
        i = i+2;
        console.log(i);
    }
}
probar3=function(){
    let par=0;
    for (let i = 2; i <=10 ; i+=2) {
        par+=i;
        
    }
    console.log(par);
}
probar4=function(){
    for (let i = 5; i <= 40; i+=5) {
        
        console.log(i);
    }
}
probar5=function(){
    for (let i = 0; i<=0; i++) {
        
        console.log(i);
    }
}
probar6=function(){
   let array=[1, 2, 3, 4, 5];
   let ultimoIndex = array.length;
   console.log("El ultimo valor del array es " + array[ultimoIndex]); 
}