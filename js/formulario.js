import { cargarPrepagas } from "./llamadasApi.js";

cargarPrepagas();

function validarNombre(nombre) {
    const pattern = /^[A-Za-z]{1,50}$/;
    return pattern.test(nombre);
}

function validarApellido(apellido) {
    const pattern = /^[A-Za-z]{1,50}$/;
    return pattern.test(apellido);
}

function validarCorreo(correo) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(correo);
}

function validarContrasena(contrasena) {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return pattern.test(contrasena);
}

function validarFormulario() {
    var nombre = document.getElementById("username").value.trim();
    var apellido = document.getElementById("userLastname").value.trim();
    var genero = document.querySelector('input[name="gender"]:checked');
    var fechaNacimiento = document.getElementById("userbday").value;
    var correo = document.getElementById("useremail").value.trim();
    var contrasena = document.getElementById("userPass").value;
    var confirmarContrasena = document.getElementById("userConfirmPass").value;
    var imagen = document.getElementById("os-img").files.length;



    // Validación de nombre
    if (!validarNombre(nombre)) {
        alert("Por favor ingrese su nombre.");
        return false;
    }

    // Validación de apellido
    if (!validarApellido(apellido)) {
        alert("Por favor ingrese su apellido.");
        return false;
    }

    // Validación de género
    if (!genero) {
        alert("Por favor seleccione su género.");
        return false;
    }

    // Validación de fecha de nacimiento

    if (fechaNacimiento === "") {
        alert("Por favor seleccione su fecha de nacimiento.");
        return false;
    } else {
        var fechaNacimientoIngresada = new Date(fechaNacimiento);
        var fechaActual = new Date();
        if (fechaNacimientoIngresada >= fechaActual) {
            alert("La fecha de nacimiento debe ser una fecha pasada.");
            return false;
        }
    }

    // Validación de correo electrónico
    if (!validarCorreo(correo)) {
        alert("Por favor ingrese su correo electrónico.");
        return false;
    }

    // Validación de prepaga
    if (prepaga === "") {
        alert("Seleccione una opción de medicina prepaga.");
        return false;
    }

    // Validación de contraseña
    if (!validarContrasena(contrasena)) {
        alert("Por favor ingrese una contraseña.");
        return false;
    }

    if (contrasena !== confirmarContrasena) {
        alert("Las contraseñas no coinciden.");
        return false;
    }


    // Validación de imagen
    if (imagen === 0) {
        alert("Por favor suba una imagen.");
        return false;
    }

    return true;
}


document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validarFormulario()) {
        window.location.href = 'confirmacion.html';
    }
});
