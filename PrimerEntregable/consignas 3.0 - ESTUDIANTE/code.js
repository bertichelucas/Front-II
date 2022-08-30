/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
    datosPersona.nombre = obtenerNombreUsuario();
    datosPersona.edad = obtenerEdadUsuario();
    datosPersona.ciudad = obtenerCiudadUsuario();
    datosPersona.interesPorJs = obtenerInteresJs();
}

function obtenerNombreUsuario(){
  return prompt("Ingresa tu nombre:");
}

function obtenerEdadUsuario(){
  let edad = prompt("Ingresa el año en el que naciste");
  let date = new Date;
  return date.getFullYear() - edad;
}

function obtenerCiudadUsuario(){
  return prompt("Ingresa la ciudad donde vives");
}

function obtenerInteresJs(){
  return (confirm("Te interesa JS") ? "Si" : "No");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const renderItems  = document.querySelectorAll("h3 span");
  console.log(datosPersona)
  for(let miSpan of renderItems){
    if (miSpan.id == "javascript"){
      miSpan.innerText += datosPersona.interesPorJs;
    } else{
      miSpan.innerText += datosPersona[miSpan.id];
    }
  }

  profileBtn.removeEventListener("click", renderizarDatosUsuario)
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const filaMaterias = document.querySelector("#fila");
  for(let materia of listado){
    filaMaterias.innerHTML += `
    <div class ='caja'>
      <img src = ${materia.imgUrl} alt= ${materia.lenguajes}>
      <p class ='lenguajes'>Lenguaje: ${materia.lenguajes}</p>
      <p class ='bimestre'>Bimestre: ${materia.bimestre}</p>
    </div>
    `
  }
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const paginaGeneral = document.querySelector("#sitio");
  paginaGeneral.classList.toggle("dark")
}

  /* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
  window.addEventListener('keypress', (e)=>{
    if (e.key.toUpperCase() == 'F'){
      let texto = document.querySelector("#sobre-mi")
      console.log(texto)
      texto.removeAttribute("class", "oculto")
    }
  })


