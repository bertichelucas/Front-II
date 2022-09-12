fetch("https://ctd-todo-api.herokuapp.com/v1/users",{
    method : "POST",
    body: JSON.stringify({
        firstName: "Juanito",
        lastName: "Perez",
        email: "juanitoperez@gmail.com",
        password: "321313123312",
    }),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
}).then((ress) => ress.json())
    .then( (data) => {
        console.log(data)
})
