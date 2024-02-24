// Crear un arreglo con objetos
let personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Carlos', edad: 28 },
    { nombre: 'Laura', edad: 35 },
    { nombre: 'Pedro', edad: 32 }
];

probar=function(){
// Inicializar variables para la persona con mayor edad
let personaMayor = personas[0];

// Utilizar un bucle para buscar la persona con mayor edad
for (let i = 1; i < personas.length; i++) {
    if (personas[i].edad > personaMayor.edad) {
        personaMayor = personas[i];
    }
}

// Imprimir el nombre de la persona con mayor edad
console.log('La persona con mayor edad es:', personaMayor.nombre);
}