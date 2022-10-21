// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
if (!localStorage.jwt) {
    location.replace('./index.html');
}


/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function() {

    const urlTareas = 'https://ctd-todo-api.herokuapp.com/v1/tasks';
    const urlUsuario = 'https://ctd-todo-api.herokuapp.com/v1/users/getMe';
    
    console.log(localStorage.jwt);
    const token = JSON.parse(localStorage.jwt);

    const formCrearTarea = document.querySelector('.nueva-tarea');
    const nuevaTarea = document.querySelector('#nuevaTarea');
    const btnCerrarSesion = document.querySelector('#closeApp');

    
    
    obtenerNombreUsuario();
    consultarTareas();


    /* -------------------------------------------------------------------------- */
    /*                          FUNCIÓN 1 - Cerrar sesión                         */
    /* -------------------------------------------------------------------------- */
    btnCerrarSesion.addEventListener('click', ()=>{
        const cerrarSesion = confirm("Desea cerrar sesión?");
        if (cerrarSesion){
            //se limpia el localStorage y redireccionamos al login

            localStorage.clear();
            location.replace('./index.html');
        }
    })

    /* -------------------------------------------------------------------------- */
    /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
    /* -------------------------------------------------------------------------- */
    function obtenerNombreUsuario(){
        const settings = {
            method: 'GET',
            headers: {
                authorization: token
            }
        };

        //Realizo el Get de mi usuario
        fetch(urlUsuario, settings)
        .then((response) => response.json())
        .then((data) =>{
            showUserName(data.firstName + ' ' + data.lastName);
        })
    }

    function showUserName(userName){
        const userText = document.querySelector(".user-info p");
        userText.innerText = userName;
    }
    

    /* -------------------------------------------------------------------------- */
    /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
    /* -------------------------------------------------------------------------- */
    function consultarTareas() {
        const settings = {
            method: 'GET',
            headers: {
                authorization: token
            }
        };

        //Realizo el get de las tareas
        fetch(urlTareas, settings)
        .then(response => response.json())
        .then(data => {
            renderizarTareas(data);
            //CrearEventosBotonesCambioEstado();
        });
    }

    

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
    /* -------------------------------------------------------------------------- */

    formCrearTarea.addEventListener('submit', (event)=>{
        event.preventDefault();

        //Creo el body para mi request
        const requestBody = {
            description: nuevaTarea.value
        };

        const settings = {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
                authorization: token
            }
        };
        
        //Llamo a crearTarea
        createTask(settings)
    })

    function createTask(settings){
        fetch(urlTareas, settings)
        .then(response => response.json())
        .then(data => {
                console.log(data);
                consultarTareas();
        }).catch(err => console.log(err));   
    }

    /* -------------------------------------------------------------------------- */
    /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
    /* -------------------------------------------------------------------------- */
    function renderizarTareas(data){

        const tareasPendientes = document.querySelector(".tareas-pendientes");
        const tareasTerminadas = document.querySelector(".tareas-terminadas");
        tareasPendientes.innerHTML = '';
        tareasTerminadas.innerHTML = '';

        let contadorTareasTerminadas = 0;

        data.forEach(tarea => {

            //Manipulacion de la fecha de la tarea
            let fecha = new Date(tarea.createdAt);

            if(tarea.completed){
                contadorTareasTerminadas++;
                tareasTerminadas.innerHTML += crearTemplateFinalizada(tarea);
            }else{
                tareasPendientes.innerHTML += crearTemplatePendiente(tarea, fecha);
            }
        });

        document.querySelector('#cantidad-finalizadas').innerText = contadorTareasTerminadas;
    }

    function crearTemplateFinalizada(tarea){
        return `
        <li class="tarea">
            <div class="hecha">
                <i class="fa-regular fa-circle-check"></i>
            </div>
            <div class="descripcion">
                <p class="nombre">${tarea.description}</p>
                <div class="cambios-estados">
                <button class="change incompleta" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
                <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
        </li>
        `
    }
    
    function crearTemplatePendiente(tarea, fecha){
        return `
        <li class="tarea">
            <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
            <div class="descripcion">
                <p class="nombre">${tarea.description}</p>
                <p class="timestamp">${fecha.toLocaleDateString()}</p>
            </div>
        </li>
        `
    }

    /* -------------------------------------------------------------------------- */
    /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
    /* -------------------------------------------------------------------------- */
    function CrearEventosBotonesCambioEstado(){
        const btnCambioEstado = document.querySelectorAll('.change');

        btnCambioEstado.forEach(boton => {
            boton.addEventListener('click', (e) =>{
                const id = boton.id;
                const url = `${urlTareas}/${id}}`;
                const bodyRequest =  {completed: true};
                if (boton.classList.contains('incompleta')){
                    bodyRequest.completed = false;
                }

                const settingsCambio ={
                    method: 'PUT',
                    headers: {
                        "Authorization": token,
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(bodyRequest)
                }

                fetch(url, settingsCambio)
                .then(response => consultarTareas())

            })
        })
    }


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
    /* -------------------------------------------------------------------------- */

});