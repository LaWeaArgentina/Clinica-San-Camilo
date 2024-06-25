cargarEspecialidades();

async function cargarEspecialidades() {
    const respuesta = await fetch("https://sancamilo.vercel.app/especialidades");
    const especialidades = await respuesta.json();

    const menu = document.querySelector("#especialidad");
    for (const especialidad of especialidades) {
        const opcion = document.createElement('option');
        opcion.value = especialidad.id;
        opcion.innerHTML = especialidad.nombre;
        menu.appendChild(opcion);
    }
}