// una funcion esta por compuesta por la palabra resevada de fuction//
// del nombre entre parentisis los paramentros //
// y entre llave el cuerpo de la funcion la cual es un bloque de codigo//

function suma (a,b){
    return a+b;
}
// console.log(suma(4,8));

const resultado = suma(4,8);
console.log(resultado);

function resta(a,b){
    return a-b;
}
console.log(resta(10,5));

// Funcion con array//

const lista = [1,2,3,4,5,6,7,8,9,10];
const frutas = ["manzana","pera","uva","sandia","melon"];
function primerElemento(duro){
    return duro [0];
}
console.log(primerElemento(frutas));