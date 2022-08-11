let list = [
    { nombre: "Emi", ciudad: "Buenos Aires"},
    { nombre: "Mica", ciudad: "Capital"},
    { nombre: "Agos", ciudad: "Capital"}
]

for (const item of list){
    for (const key in item){
        console.log(key + ": " + item[key]);
    }
}

const STONE = 1;
const PAPER = 2;
const SCISSORS = 3;
const USER_OPTION = parseInt(prompt("¿Piedra(1), papel(2) o tijera(3)?"));
const PC_OPTION = parseInt(Math.random() * 3 + 1);

if (USER_OPTION > PC_OPTION && (PC_OPTION != 1 && USER_OPTION != 3) || (USER_OPTION ==1 && PC_OPTION == 3)){
    console.log("ganaste");
}else if (USER_OPTION == PC_OPTION){
    console.log("empate");
}else{
    console.log("perdiste");
}

console.log(USER_OPTION);
console.log(PC_OPTION);