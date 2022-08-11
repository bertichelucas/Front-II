let title = document.querySelector('h1')

title.className = "red";

//Le asigno dinamicamente la clase red a la etiqueta h1

let body = document.querySelector('body')

body.style.fontSize = '44px';

//Le asigno dinamicamente el fontsize de 44 px a la etiqueta body

let result = confirm("queres achicar el texto de la pantalla?");

if (result) document.querySelector('body').style.fontSize = '34px';

let elements = document.querySelectorAll('li');
elements.forEach((element, index) => {
    console.log(index);
    console.log(element.innerText);

});

//Selecciono primero todos los li, a eso lo recorro y para
//cada uno imprimo por consola el texto que tiene adentro

let elements2 = document.querySelectorAll('li');
elements2.forEach((element, index) => {
    
    element.innerText = index + 1 + ' - ' + element.innerText;

});

//En este segundo caso reemplazo el texto original con el texto sumado al índice