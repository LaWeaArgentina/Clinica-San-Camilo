export async function cargarEspecialidades() {
    const menu = document.querySelector("#especialidad");
    if (menu) {
        const respuesta = await fetch("https://sancamilo.vercel.app/especialidades");
        const especialidades = await respuesta.json();

        for (const especialidad of especialidades) {
            const opcion = document.createElement('option');
            opcion.value = especialidad.id;
            opcion.innerHTML = especialidad.nombre;
            menu.appendChild(opcion);
        }
    }
}