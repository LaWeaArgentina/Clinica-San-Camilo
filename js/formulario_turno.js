import { cargarEspecialidades } from "./llamadasApi";

cargarEspecialidades();

document.getElementById("especialidad").addEventListener("change", () => {
    especialidad_check()
});

document.getElementById("fecha").addEventListener("change", () => {
    fecha_check();
});

document.addEventListener("mouseover", event => {
    let idHorario = event.target.id;
    if (idHorario >= 0 & idHorario <= 15 & idHorario != "") {
        hoverColorearHorarios(idHorario);
    }
});


document.addEventListener("mouseout", event => {
    let idHorario = event.target.id;
    if (idHorario >= 0 & idHorario <= 15 & idHorario != "") {
        hoverDescolorearHorarios(idHorario);
    }
});

document.addEventListener("click", event => {
    let idHorario = event.target.id;
    if (idHorario >= 0 & idHorario <= 15 & idHorario != "") {
        clickColorearHorarios(idHorario);
    }
});

function hoverColorearHorarios(idHorario) {
    let CantidadModulos = document.getElementById("especialidad").value;
    let listaHorarios = document.querySelectorAll(".grid-cell");
    let ultimoHorario = parseInt(idHorario) + parseInt(CantidadModulos);
    for (let i = idHorario; i < ultimoHorario; i++) {
        listaHorarios[i].classList.toggle("bg-warning");
    }
}

function hoverDescolorearHorarios(idHorario) {
    let CantidadModulos = document.getElementById("especialidad").value;
    let listaHorarios = document.querySelectorAll(".grid-cell");
    let ultimoHorario = parseInt(idHorario) + parseInt(CantidadModulos);
    for (let i = idHorario; i < ultimoHorario; i++) {
        listaHorarios[i].classList.remove("bg-warning");
    }
}

function clickColorearHorarios(idHorario) {
    //ELIMINA VERDE DE TODOS Y DESPUES APLICA EN LOS SELECCIONADOS
    let CantidadModulos = document.getElementById("especialidad").value;
    let listaHorarios = document.querySelectorAll(".grid-cell");
    let ultimoHorario = parseInt(idHorario) + parseInt(CantidadModulos);
    for (let i = 0; i < listaHorarios.length; i++) {
        listaHorarios[i].classList.remove("bg-success");
    }
    for (let i = idHorario; i < ultimoHorario; i++) {
        listaHorarios[i].classList.add("bg-success");
    }
    document.getElementById("confirmar").classList.remove("hidden");

}

function especialidad_check() {
    let especialidad = document.getElementById("especialidad");
    let fecha = document.getElementById("fecha");
    if (especialidad.value != "" & fecha.classList.contains("hidden")) {
        fecha.classList.toggle("hidden");
    }
}

function fecha_check() {
    let fecha = document.getElementById("fecha");
    let horario = document.getElementById("horario");
    if (fecha.value != "" & horario.classList.contains("hidden")) {
        horario.classList.toggle("hidden");
    }
}

$("#Fecha").flatpickr({
    dateFormat: "m-d-Y",
    "disable": [
        function (date) {
            return (date.getDay() === 0 || date.getDay() === 6);  // disable weekends
        }
    ],
    "locale": {
        "firstDayOfWeek": 1 // set start day of week to Monday
    }
});