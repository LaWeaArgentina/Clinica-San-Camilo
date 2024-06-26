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

export async function cargarPrepagas() {
    const menu = document.querySelector("#prepaga");
    if (menu) {
        const respuesta = await fetch("https://sancamilo.vercel.app/prepagas");
        const prepagas = await respuesta.json();

        for (const prepaga of prepagas.lista) {
            const opcion = document.createElement('option');
            opcion.value = prepaga.id;
            opcion.innerHTML = prepaga.nombre;
            menu.appendChild(opcion);
        }
    }
}