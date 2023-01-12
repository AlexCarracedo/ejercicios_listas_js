// Crea una lista de números pares del 2 al 20 utilizando un bucle while.
numeros_pares=[];
var i=0;
while (i<=20) {
    if (i%2==0) {
        numeros_pares.push(i);
    }
    i=i+1;
}
// Crea una lista de números impares del 1 al 19 utilizando un bucle for.
numeros_impares=[];
for (let j=0; j<=19; j++) {
    if (j%2==1) {
        numeros_impares.push(j)
    }
}
// Crea una lista de comida y utiliza un array literal para agregar varios platos a la lista.
comida=["patata","zanahoria","pescado"];
// Agrega un elemento al principio de la lista de comida que creaste en el ejercicio anterior.
comida.unshift("manzana");
// Accede al segundo elemento de la lista de comida y cambia su valor por un plato diferente.
comida[1]="hamburguesa";
// Recorre la lista de comida utilizando un bucle while y muestra cada elemento en la consola.
var k=0;
while (k<comida.length) {
    console.log(comida[k]);
    k=k+1;
}
// Crea una función que reciba una lista como parámetro y devuelva el último elemento de la lista.
function ult_elem(lista) {
    console.log(lista[lista.length-1]);
}
// Crea una función que reciba una lista y un elemento como parámetros y
//agregue el elemento a la lista si no se encuentra en ella.
function agregar(lista, elemento) {
    lista.push(elemento);
}
// Crea una función que reciba una lista como parámetro y
//devuelva una nueva lista con los elementos de la lista original en orden inverso.
function invertir(lista) {
    lista.reverse();
}
// Crea una función que reciba una lista de números como parámetro y
//devuelva la suma de todos los números de la lista.
function sumar(lista) {
    var m=0;
    for (let l=0; l<lista.length; l++) {
        m=m+lista[l];
    }
    console.log(m);
}
// Crea una función que reciba una lista de números como parámetro y
//devuelva la media de todos los números de la lista.
function media(lista) {
    var o=0;
    for (let n=0; n<lista.length; n++) {
        o=o+lista[n];
    }
    console.log(o/lista.length);
}