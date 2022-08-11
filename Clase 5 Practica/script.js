let darkMode = confirm("Desea cambiar a modo oscuro?");

if (darkMode){
    let body = document.querySelector('body');
    body.className = 'darkBack';

    document.querySelector('h1').className = 'tituloDark';

    let divs = document.querySelectorAll('.item');

    divs.forEach(element => {
            element.style.backgroundColor = 'rgb(19, 19, 19)';
            element.style.borderColor = 'black';
    });



    let texts = document.querySelectorAll('.item p')
    
    texts.forEach(element => {
        element.className = 'darkText';
    });

    let titleTexts = document.querySelectorAll('.item h2')
    
    titleTexts.forEach(element => {
        element.className = 'darkText';
    });
}