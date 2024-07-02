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

export async function cargarProfesionales(id) { 
    const menu = document.querySelector("#profesional");
    const iteraciones = menu.options.length
    for(let i = 1; i <= iteraciones ; i++) {
        menu.remove(1);
    }
    if (id) {
        let url = "https://sancamilo.vercel.app/usuarios/profesionales/"+id;
        const respuesta = await fetch(url);
        const profesionales = await respuesta.json();

        for (const profesional of profesionales) {
            const opcion = document.createElement('option');
            opcion.value = profesional.id;
            opcion.innerHTML = profesional.nombre_completo;
            menu.appendChild(opcion);
        }
    }
}