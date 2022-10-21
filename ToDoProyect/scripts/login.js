// emiliano.gallo@digitalhouse.com 1234
//const {validarTexto, normalizarTexto, validarEmail, normalizarEmail, validarContrasenia, compararContrasenias} = require("./utils.js")

window.addEventListener('load', function() {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.forms[0];
    const email = this.document.querySelector('#inputEmail');
    const password = document.querySelector('#inputPassword');
    const url = 'https://ctd-todo-api.herokuapp.com/v1';


    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', (event)=>{
        event.preventDefault();
        
        //Creo el body de mi request
        const requestBody = {
            email: email.value,
            password: password.value
        };

        //Configuro los settings de la request
        const settings = {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json' //Tengo que poner esto porque estoy enviando un json
            }
        };
        
        //Lanzo la consulta de login a la API
        login(settings);

        //Limpio los campos del form
        form.reset();

    });

    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                     */
    /* -------------------------------------------------------------------------- */
    function login(settings){
        fetch(url + "/users/login", settings)
        .then((response) => {
            console.log(response)
            return response.json()})
        .then((data) => {

            console.log(data);
            console.log("bienas");
            //Guardo en el localStorage el objeto con el token
            localStorage.setItem('jwt', JSON.stringify(data.jwt));

            //redirecciono a la página
            location.replace('./mis-tareas.html');
        }).catch(err =>{
            console.log("Promesa rechazada");
            console.log(err);
        })
    };
});