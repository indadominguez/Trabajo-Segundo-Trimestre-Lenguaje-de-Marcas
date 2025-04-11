
// Productos
document.addEventListener("DOMContentLoaded", function() {
    console.log("Galería cargada correctamente");

    const imagenes = document.querySelectorAll('.imagen-helado, .imagen-especialidad, .imagen-bebida');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('img01');
    const closeBtn = document.querySelector('.close');

    imagenes.forEach(imagen => {
        imagen.addEventListener('click', function(event) {
            modal.style.display = 'block';
            modalImg.src = event.target.src; 
            console.log('Abriendo el modal para la imagen: ', event.target.src);
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        console.log('Modal cerrado');
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            console.log('Modal cerrado al hacer clic en el fondo');
        }
    });
});


// Formulario
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("contacto-form"); 
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const telefonoInput = document.getElementById("telefono");
    const mensajeInput = document.getElementById("mensaje");
    const fechaInput = document.getElementById("fecha");
    const horaInput = document.getElementById("hora");
    const botonEnviar = formulario.querySelector("button[type='submit']");
    
    console.log("Formulario cargado correctamente");

    function validarFormulario(event) {
        console.log("Validando formulario...");

        let errores = [];

        if (nombreInput.value.trim() === "") {
            errores.push("El campo Nombre es obligatorio.");
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            errores.push("El correo electrónico no es válido.");
        }

        const telefonoRegex = /^[0-9]{9}$/;
        if (!telefonoRegex.test(telefonoInput.value.trim())) {
            errores.push("El teléfono debe tener 9 dígitos.");
        }

        if (mensajeInput.value.trim() === "") {
            errores.push("El campo Mensaje es obligatorio.");
        }

        if (fechaInput.value === "") {
            errores.push("El campo Fecha de visita es obligatorio.");
        }

        if (horaInput.value && !/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/.test(horaInput.value)) {
            errores.push("La hora no es válida.");
        }

        if (errores.length > 0) {
            event.preventDefault(); 
            mostrarErrores(errores);
            console.log("Errores encontrados:", errores);
        } else {

            console.log("Formulario validado correctamente.");
            alert("Formulario enviado con éxito.");
        }
    }

    function mostrarErrores(errores) {

        const errorContainer = document.querySelector(".error-container");
        if (errorContainer) {
            errorContainer.remove();
        }

        const newErrorContainer = document.createElement("div");
        newErrorContainer.classList.add("error-container");

        errores.forEach(function(error) {
            const errorItem = document.createElement("p");
            errorItem.textContent = error;
            newErrorContainer.appendChild(errorItem);
        });

        formulario.insertAdjacentElement("beforebegin", newErrorContainer);
    }

    formulario.addEventListener("submit", validarFormulario);
});


// Filtro Reseña
document.addEventListener('DOMContentLoaded', function() {
    const autorSelect = document.getElementById('autor');
    
    function filtrarReseñas() {
        const autor = autorSelect.value; 
        console.log("Autor seleccionado:", autor); 

        const reseñas = document.querySelectorAll('.reseñas .item-reseña');

        reseñas.forEach(function(reseña) {
            const autorR = reseña.getAttribute('data-autor');
            console.log("Autor de la reseña:", autorR); 

            if (autor === 'todos' || autor === autorR) {
                reseña.style.display = 'block'; 
                console.log("Mostrar reseña de autor:", autorR);
            } else {
                reseña.style.display = 'none'; 
                console.log("Ocultar reseña de autor:", autorR);
            }
        });
    }

    autorSelect.addEventListener('change', filtrarReseñas);

    filtrarReseñas();
});

// Flujo
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('search'); // Obtener el campo de búsqueda
    const heladosList = document.querySelectorAll('.helado-item'); // Obtener todos los productos (helados)
    const especialidadesList = document.querySelectorAll('.especialidad-item'); // Obtener todas las especialidades
    const bebidasList = document.querySelectorAll('.bebida-item'); // Obtener todas las bebidas

    // Función para filtrar los productos
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase(); // Obtener el valor de búsqueda en minúsculas

        // Filtrar helados
        heladosList.forEach(item => {
            const productName = item.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(query)) {
                item.style.display = 'block'; // Mostrar si coincide con la búsqueda
            } else {
                item.style.display = 'none'; // Ocultar si no coincide
            }
        });

        // Filtrar especialidades
        especialidadesList.forEach(item => {
            const productName = item.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        // Filtrar bebidas
        bebidasList.forEach(item => {
            const productName = item.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
