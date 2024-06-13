/**
 * Abre y cierra el menu deplegable de links navegables. Funciona unicamente sobre un elemento HTML
 * que tenga clase .nav-links.
 */
function abrirCerrarMenu() {
    /** @type HTMLElement */
    const panelNavegacion = document.querySelector(".nav-links");

    if (panelNavegacion.hasAttribute("oculto")) {
        panelNavegacion.removeAttribute("oculto");
    } else {
        panelNavegacion.setAttribute("oculto", "");
    }
} 