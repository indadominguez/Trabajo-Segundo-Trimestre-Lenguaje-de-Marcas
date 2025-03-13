
// 1. SELECCIONAR ELEMENTOS DEL DOM
const formulario = document.querySelector(".formulario form");
console.log("Formulario seleccionado:", formulario);

const tituloFormulario = document.querySelector(".formulario h2");
console.log("Título del formulario antes del cambio:", tituloFormulario.textContent);

const campoNombre = document.getElementById("nombre");
console.log("Campo Nombre seleccionado:", campoNombre);

const botonEnviar = document.querySelector("button[type='submit']");
console.log("Botón de enviar seleccionado:", botonEnviar);

const redesSociales = document.querySelector(".social-media");
console.log("Redes sociales seleccionadas:", redesSociales);

// 2. MODIFICAR CONTENIDO Y ATRIBUTOS
tituloFormulario.textContent = "¡Queremos saber de ti!"; // Cambia el título del formulario
console.log("Título del formulario después del cambio:", tituloFormulario.textContent);


// 3. AÑADIR NUEVOS ELEMENTOS
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Déjanos tu mensaje y te responderemos lo antes posible.";
document.querySelector(".formulario").insertBefore(nuevoParrafo, formulario);
console.log("Nuevo párrafo agregado antes del formulario:", nuevoParrafo.textContent);

// 4. ELIMINAR ELEMENTOS SEGÚN CONDICIÓN
// Elimina el logo de Twitter si existe
const twitterLogo = document.querySelector("a[aria-label='Twitter']");
if (twitterLogo) {
    twitterLogo.parentElement.remove();
    console.log("El logo de Twitter ha sido eliminado.");
} else {
    console.log("No se encontró el logo de Twitter.");
}

// 5. MANIPULAR ESTILOS DINÁMICAMENTE
botonEnviar.addEventListener("mouseover", () => {
    botonEnviar.style.backgroundColor = "#ff6600"; // Color al pasar el cursor
    botonEnviar.style.color = "#fff";
    console.log("Mouse sobre el botón de enviar: color cambiado a naranja.");
});
botonEnviar.addEventListener("mouseout", () => {
    botonEnviar.style.backgroundColor = ""; // Vuelve al color original
    botonEnviar.style.color = "";
    console.log("Mouse fuera del botón de enviar: color como antes");
});

// 6. CREAR UN NUEVO BOTÓN PARA CAMBIAR EL TEMA DE LA PÁGINA
const botonTema = document.createElement("button");
botonTema.textContent = "Modo Oscuro";
botonTema.style.margin = "1rem";
document.body.insertBefore(botonTema, document.body.firstChild);
console.log("Botón de cambio de tema.");

botonTema.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const modoActual = document.body.classList.contains("dark-mode") ? "Modo Oscuro" : "Modo Claro";
    botonTema.textContent = modoActual;
    console.log("Modo cambiado a:", modoActual);
});

// 7. AGREGAR ESTILOS PARA EL MODO OSCURO
const estiloModoOscuro = document.createElement("style");
estiloModoOscuro.textContent = `
    .dark-mode {
        background-color: #222;
        color: white;
    }
    .dark-mode a {
        color: lightblue;
    }
`;
document.head.appendChild(estiloModoOscuro);
console.log("Estilos para modo oscuro.");


 


