
const registerUser ={
    name: '',
    password: '',
    telephone: 0,
    hobbies: [],
    nationality: ''
}

/*NORMALIZE NAME */
const inputName = document.querySelector('#nombre');

inputName.addEventListener('keyup', (event)=> {
    
    inputName.value = getNormalizedName(inputName.value, event.key);
    
})

function getNormalizedName(name, key){
    name = removeNumbersFromText(name, key)
    return setUpperCaseToFirstLetterOnly(name)

}

function removeNumbersFromText(text, char){
    if (!isNaN(parseInt(char))){
        text = text.replaceAll(char, '')
    }
    return text;

}

function setUpperCaseToFirstLetterOnly(text){
    if (!text) return "";
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}


/*NORMALIZE TELEPHONE*/

const inputPhone = document.querySelector("#tel");

inputPhone.addEventListener("keyup", (event)=>{
    inputPhone.value = getNormalizedTelephone(inputPhone.value, event.key)
})

function getNormalizedTelephone(phone, char){
    phone = removeLettersFromPhone(phone, char)
    return phone;

}

function removeLettersFromPhone(phone, char){
    if (isNaN(parseInt(char)) || phone.length >= 10){
        phone = phone.replace(char, '');
    }
    return phone;
}


//Clase 12 validando datos

window.addEventListener('submit', (e) =>{
    e.preventDefault();

    if (isNameValid() && isTelephoneValid() && isNationalityValid()){
        console.log("Informacion valida")
    }

    function isNameValid(){
        return document.querySelector('#nombre').value.length >= 4;
    }

    function isTelephoneValid(){
        return document.querySelector('#tel').value.length > 7;
    }

    function isNationalityValid(){
        return document.querySelector('input[type=radio][name=nacionalidad]:checked') != null;
    }
})