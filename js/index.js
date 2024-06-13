/**
 * Abre y cierra el menu deplegable de links navegables. Funciona unicamente sobre un elemento HTML
 * que tenga clase .nav-links.
 */
function abrirCerrarMenu() {
    /** @type HTMLElement */
    const panelNavegacion = document.querySelector(".nav-links");

    panelNavegacion.classList.toggle("oculto");
} 