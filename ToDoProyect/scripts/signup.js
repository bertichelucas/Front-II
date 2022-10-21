window.addEventListener('load', function() {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.forms[0];
    const nombre = document.querySelector('#inputNombre');
    const apellido = document.querySelector('#inputApellido');
    const email = document.querySelector('#inputEmail');
    const password = document.querySelector('#inputPassword');
    const url = 'https://ctd-todo-api.herokuapp.com/v1';

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener("submit", (event) =>{
        event.preventDefault()

        //Creo el cuerpo de la request
        const requestBody = {
            firstName: nombre.value,
            lastName: apellido.value, 
            email: email.value,
            password: password.value
        }

        //Configuro los settings de la request
        const settings = {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        //llamo a registrar a la API
        register(settings)
        
    })

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function register(settings){
            fetch(url + "/users", settings)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                //guardo en LocalStorage el objeto con el token
                localStorage.setItem('jwt', JSON.stringify(data.jwt));

                //redireccionamos a la página
                location.replace('./mis-tareas.html');
            }).catch(err =>{
                console.log("Promesa rechazada");
                console.log(err);
            })
        
    }
});