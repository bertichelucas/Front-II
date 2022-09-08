const nameInput = document.querySelector('input[name="nombre"]')
const submitButton = document.querySelector('button')

let errors = []

/*
Debe contener al menos dos palabras.
- Cada nombre o apellido debe tener más de 1 letra.
- El campo no puede superar los 150 caracteres.
- El campo es obligatorio.
- No debe contener números.
*/

nameInput.addEventListener('keypress', (e) =>{
    if(!isNaN(parseInt(e.key))){
        e.preventDefault();
    }
    
})

submitButton.addEventListener('click', (e) =>{
        errors = []
        validarNombre(nameInput.value)
    if (errors.length > 0){
        console.log("boenas", errors)
        e.preventDefault()
        const errorDiv = document.querySelector('.errores')
        errorDiv.innerHTML = ""
        errors.forEach(error => {
            errorDiv.innerHTML += `<li>${error}</li>`
        });
    }
})

function validarNombre(nombre){
    if(nombreEstaVacio(nombre)){

        errors.push("El campo nombre es obligatorio")
        
    }
    if (!nombreTieneDosPalabrasMinimo(nombre)){
        errors.push("El nombre debe tener dos palabras  minimo")
    }
    if (!nombreTienePalabrasConMasDeUnaLetra(nombre)){
        errors.push("Cada nombre o apellido debe tener más de 1 letra")
    }
    else if (nombreSuperaMaximoCaracteres(nombre)){
        errors.push("El campo no puede superar  los 150 caracteres")
    }

}

function nombreTieneDosPalabrasMinimo(nombre){
    return (nombre.split(' ').length >= 2)
}

function nombreTienePalabrasConMasDeUnaLetra(nombre){
    let palabras = nombre.split(' ')
    for (let i = 0; i  < palabras.length; i++){
        console.log(palabras[i])
        if (palabras[i].length <= 1) return  false;
    }
    return true;
}

function nombreSuperaMaximoCaracteres(nombre){
    return nombre.length > 150;
}

function nombreEstaVacio(nombre){
    return nombre.length == 0;
}