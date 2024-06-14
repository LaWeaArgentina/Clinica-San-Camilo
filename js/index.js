/** @type HTMLElement */
const panelNavegacion = document.querySelector(".nav-links");
panelNavegacion.addEventListener("click", abrirCerrarMenu);

/**
 * Abre y cierra el menu deplegable de links navegables. Funciona unicamente sobre un elemento HTML
 * que tenga clase .nav-links.
 */
function abrirCerrarMenu() {
    panelNavegacion.classList.toggle("oculto");
}
