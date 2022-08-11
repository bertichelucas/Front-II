document.querySelector('div')
document.querySelector('#miID')
document.querySelector('.miClase')

//Nos devuelve los elementos dentro del html que estemos seleccionando.
//Nos devuelve la primera ocurrencia de aquello que pasemos como parámetro.

document.querySelectorAll('div')

//El query selector all nos devuelve todas las ocurrencias de aquello que 
//pasemos como parámetro pero en forma de string

document.getElementsByClassName('miClase')

//Nos devuelve un array de elementos que comparten la misma clase.
//No hace falta aclarar el punto.

document.getElementsByTagName('miID')

//Nos devuelve un elemento con ud ID y como el id es único no devuelve un array

console.log(document.querySelector('div'))

//Todos estos puntos se pueden imprimir por consola para mostrarlos en la consola del navegador.