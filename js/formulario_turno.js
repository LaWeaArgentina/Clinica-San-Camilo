import { cargarEspecialidades,cargarProfesionales } from "./llamadasApi.js";

cargarEspecialidades();
let horaSeleccionada;
let especialidadId;
let horarios = new Array(
    "12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30",
    "16:00","16:30","17:00","17:30", "18:00","18:30","19:00","19:30"
)

document.getElementById("especialidad").addEventListener("change", () => {
    especialidadId = document.getElementById("especialidad").value;
    console.log(especialidadId);
    cargarProfesionales(especialidadId).then(especialidad_check());
});
document.getElementById("profesional").addEventListener("change", () => {
    profesional_check();
});
document.getElementById("Fecha").addEventListener("change", () => {
    fecha_check();
});
document.getElementById("enviar").addEventListener("click", () => {

    if (horarios[horaSeleccionada.id]==horaSeleccionada.innerText){
        enviar();
    }else{
        alert("Datos alterados. Refresque la pagina")
        location.reload();
    }
});
document.addEventListener("mouseover", event => {
    let idHorario = event.target.id;
    if (idHorario >= 0 & idHorario <= 15 & idHorario != "") {
        hoverColorearHorario(idHorario);
    }
});

document.addEventListener("mouseout", event => {
    let idHorario = event.target.id;
    if (idHorario >= 0 & idHorario <= 15 & idHorario != "") {
        hoverDescolorearHorario(idHorario);
    }
});

document.addEventListener("click", event => {
    let idHorario = event.target.id;
    if (idHorario >= 0 & idHorario <= 15 & idHorario != "") {
        horaSeleccionada = clickColorearHorario(idHorario);
    }
});

function hoverColorearHorario(idHorario) {
    let listaHorarios = document.querySelectorAll(".grid-cell");
    if(!listaHorarios[idHorario].classList.contains("bg-success")){
        listaHorarios[idHorario].classList.toggle("bg-warning");
    }
}

function hoverDescolorearHorario(idHorario) {
    let listaHorarios = document.querySelectorAll(".grid-cell");
    listaHorarios[idHorario].classList.remove("bg-warning");
}

function clickColorearHorario(idHorario) {
    let listaHorarios = document.querySelectorAll(".grid-cell");
    for (let i = 0; i < listaHorarios.length; i++) {
        listaHorarios[i].classList.remove("bg-success", "bg-warning");
    }
    listaHorarios[idHorario].classList.add("bg-success");
    document.getElementById("enviar").parentElement.parentElement.classList.remove("hidden");
    return listaHorarios[idHorario];
}

function especialidad_check() {
    let especialidad = document.getElementById("especialidad");
    let profesional = document.getElementById("profesionalModulo");
    if (especialidad.value != "" & profesional.classList.contains("hidden")) {
        profesional.classList.toggle("hidden");
    }
}
function profesional_check() {
    let profesional = document.getElementById("profesional");
    let fecha = document.getElementById("fechaModulo");
    if (profesional.value != "" & fecha.classList.contains("hidden")) {
        fecha.classList.toggle("hidden");
    }
}

function fecha_check() {
    let fecha = document.getElementById("fechaModulo");
    let horario = document.getElementById("horario");
    if (fecha.value != "" & horario.classList.contains("hidden")) {
        horario.classList.toggle("hidden");
    }
}

async function enviar(){
    let profesionalId = document.getElementById("profesional").value;
    let fechaSeleccionada = document.getElementById("Fecha").value

/*     const respuesta = await fetch("https://sancamilo.vercel.app/turnos/nuevo", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            paciente: pacienteId,
            profesional:profesionalId,
            fecha:fechaSeleccionada.value,
            hora:horaSeleccionada.value})
    });
    const resultado = await respuesta.json(); */
}

$("#Fecha").flatpickr({
    dateFormat: "d-m-Y",
    "disable": [
        function (date) {
            return (date.getDay() === 0 || date.getDay() === 6);  // disable weekends
        }
    ],
    "locale": {
        "firstDayOfWeek": 1 // set start day of week to Monday
    },
    "minDate": new Date()
});