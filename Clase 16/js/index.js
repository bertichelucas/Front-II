// console.log(getCountries());
// console.log('El listado de paises ya fue mostrado');

// console.log(getCountriesAsync());
// console.log('El listado de paises ya fue mostrado');


// getCountriesPromise.then((respuesta) => {
//     console.log(respuesta.list);
// });



function loadHomeAsync() {
    const container = document.querySelector('.bancaMobile');
    loadAccountStatusAsync(container);
    loadInternationalAccountStatusAsync(container);
    loadCreditCardStatusAsync(container);
}

function loadHome() {
    const container = document.querySelector('.bancaMobile');
    loadAccountStatus(container);
    loadInternationalAccountStatus(container);
    loadCreditCardStatus(container);
}

// loadHome();

// Mesa: renderizar los arrays que trae de getCountries y getCountriesPromise y observar las diferencias
// Mostrar un alert con el tiempo que tardó el 'llamado a la API'