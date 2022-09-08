window.onload = function(){

    fetch("https://api.giphy.com/v1/gifs/trending?api_key=&limit=25&rating=g")
    .then((respuesta) =>{
        return respuesta.json;
    })
    .then((data) => {
        console.log(data.data)

        for(let i = 0; i < data.data.length; i++){
            let gif = "<p>" + data.data[i].title + "</p>"
            gif += "<img src=" + informacion.data[i].images.original.url + ">"


            document.querySelector("ul").innerHTML += "<li>" + gif + "</li>"

        }
        
    })
    .catch((error) =>{
        alert("Error, intente más tarde")
    })

}