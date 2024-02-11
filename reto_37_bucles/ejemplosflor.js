mostrarNumeros =function(){
    console.log("antes del for")
    for (let i = 0;i<4;i++) {
        console.log(i); 
    }
    console.log("despues del for")
}
mostrarNumeros2 =function(){
    console.log("antes del for")
    for (let indice = 1;indice<=5;indice++) {
        console.log(indice); 
    }
    console.log("despues del for")
}
mostrarPares = function(){
    for (let x = 2; x <= 10; x+=2){
        console.log(x);
    }
}
mostrarInverso = function(){
    console.log("antes del for")
    for (let i = 10;i>0;i--) {
        console.log(i); 
    }
    console.log("despues del for")
}
hakeandoNasaPelis = function(){
    //hakenado la nasa desde 0% hasta 100%
    for (let p = 0;p<=100; p+=10) {
        
        console.log("hakeando nasa "+p+" %");
    }
    console.log("La nasa ha sido hakeada");
}
mostrarImpares = function(){
    console.log("antes del for")
    for (let x = 1; x <= 21; x+=2){
        console.log(x);
    }console.log("despues del for")
}