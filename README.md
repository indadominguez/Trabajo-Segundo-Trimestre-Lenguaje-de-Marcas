# Trabajo-Segundo-Trimestre-Lenguaje-de-Marcas
Heladería Los Italianos

---

El trabajo será la página web de unas de las heladerías con más prestigio de la ciudad de Cádiz, nada mas y nada menos que "**Los Italianos**", he decidido este negocio ya que, 
a pesar de que sea tan prestigiosa, la heladería no tiene una página propia y hace falta buscar fotos en internet para ver que oferta en su local.
Mucha información de la página web es completamente irreal, ya que, al tener un límite de tiempo reducido, he preferido invertir más tiempo en los archivos HTML y CSS

---

## Páginas Requeridas
1. **Primera Página** Índice de nuestra página web, nosotros, nuestras promociones y la ubicación del local.
2. **Segunda Página** Carta del local, incluyendo fotos, descripción de los postres y precios de los mismos.
3. **Tercera Página** Página de contacto con un formulario principal y redes sociales asociadas a Los Italianos.
4. **Cuarta  Página** Zona de reseñas y comentarios de opinión de los clientes.


---

## Índice.
- Se encuentra todo lo relacionado con nuestra página web, para que sea más flexible y cómodo, la página web contiene un marcador con nuestros cuatro archivos, relacionados todos.
- Continene un título principal y dentro tres sections que incluyen una foto y breve explicación de que se ofrece en cada una de las fotos, en este caso, Salón Italiano, Promociones y Ubicación.
- El footer es igual para todos los archivos, incluyen nuestras redes sociales, el número de teléfono, la dirección y un botón de inicio para volver al índice siempre que se quiera.


## Carta.
- Todos los sabores de nuestra heladería se encuentran dentro de este menú, cada uno viene con su respectiva foto para que el cliente pueda saber que va a consumir, para poder colocar todas las fotos iguales,
estuve bastante tiempo pero conseguí arreglarlo haciendo un cambio en el css en las class .helado-item y .especialidad-item.
- También por supuesto contiene nuestras especialidades y las bebidas que ofertamos.

## Formulario.
- La página de contacto contiene 6 espacios necesarios para poder registrarse en la pagina web de la heladería.
- Y contiene nuestra política de privacidad para que el cliente siempre sepa que tiene y no tiene que hacer dentro de la página web.

## Reseñas.
- Es el archivo más sencillo de la página web, pero no quita que sea importante, en la sección se encuentran reseñas de clintes.
- También incluye un poquito de nuestra historia, desde cuando estamos alojados en Cádiz y nuestra calidad y dedicación


## Validación del código
He implementado la validación del código con W3C Validator, al no haber hecho en el trabajo anterior la validación ya que no trabajé como debería y que en este trimestre nos hemos visto menos,
de lo esperado, a la hora de poder realizar la confirmación de la validación, nose como poder hacerla, el código está casi entero validado menos algunos fallos en el css, pero no puedo 
verificar que esté bien de verdad, y me he encontrado con la duda cuando ya lamentablemente no se me puede ayudar y tampoco quiero dar pena, por lo que aunque, es uno de los requisitos más importantes del 
trabajo, no me ha sido posible demostrar que la validación es correcta.

# Fase 2
## JavaScript
El proyecto se sigue actualizando y ahora la página web de mi heladeria contendrá un nivel básico de JavaScript para poder empezar a ver la verdadera importancia de maquetar bien y tener todo nuestro código ordenado.

**¿Qué son los lenguajes Script?**

Los lenguajes de script son lenguajes de programación diseñados para automatizar tareas que normalmente requieren intervención manual. Estos lenguajes suelen ser más fáciles de escribir y entender en comparación con lenguajes de programación tradicionales como C++ o Java. A menudo se utilizan para el procesamiento de texto, manipulación de archivos, administración de sistemas, desarrollo web y más y los lenguajes de script pueden clasificarse en función de su ejecución y uso en desarrollo web:

- **Lenguajes de script del lado del cliente**
  - Se ejecutan en el navegador del usuario.
  - No requieren comunicación con el servidor para su ejecución.
  - Mejoran la interactividad y la experiencia del usuario.
  - Ejemplos: JavaScript, TypeScript, Dart.

- **Lenguajes de script del lado del servidor**
  - Se ejecutan en el servidor antes de enviar la respuesta al cliente.
  - Permiten manejar bases de datos, autenticación y lógica de negocio.
  - Ejemplos: PHP, Python (Django, Flask), Node.js (basado en JavaScript), Ruby.

**Características Principales de JavaScript**

  En el proyecto vamos a trabajar con JavaScript por lo que es importante saber cuales son sus características más relevantes:

  - **Interpretado**: No necesita compilación, el navegador lo ejecuta directamente.
  - **Orientado a eventos**: Responde a interacciones del usuario (clics, teclas, etc.).
  - **Débilmente tipado**: No es necesario definir el tipo de las variables.
  - **Multiparadigma**: Soporta programación funcional, orientada a objetos y basada en eventos.
  - **Extensible**: Se integra con HTML y CSS, además de otras APIs web.

**Identificación de ECMAScript y sus versiones relevantes.**

ECMAScript es el estándar en el que se basa JavaScript y estas son Algunas de sus versiones más importantes y el año en el que salieron:
- **ES5 (2009**): Introdujo JSON nativo y mejoras en Arrays.
- **ES6 (2015)**: Incorporó let, const, funciones flecha, clases y Promise.
- **ES7 - ESNext (2016 en adelante)**: Añadió async/await, operadores de propagación y más mejoras.

**Comparación entre lenguajes de script como JavaScript, TypeScript u otros.**

Ya que en el trabajo usaremos JavaScript, voy hacer una pequeña comparación de JavaScript, TypeScript y de Dart en forma de tabla (he buscado como se hacía para que la explicación quedase mucho más legible) para ver las ventajas y desventajas de cada uno y sus características principales.

| **Característica**     | **JavaScript**                                            | **TypeScript**                                                      | **Dart**                                                  |
|------------------------|-----------------------------------------------------------|---------------------------------------------------------------------|-----------------------------------------------------------|
| **Tipado**             | Dinámico, no requiere declarar tipos.                    | Estático, con tipado explícito, aunque puede inferirse en muchos casos. | Estático, con tipos obligatorios para variables y funciones. |
| **Compilación**        | No requiere compilación, ejecutado directamente en el navegador. | Se compila a JavaScript antes de ejecutarse en el navegador.       | Se compila a código nativo o a JavaScript (para aplicaciones web). |
| **Paradigma**          | Multiparadigma (funcional, orientado a objetos, etc.).    | Orientado a objetos con un enfoque más fuerte en clases e interfaces. | Orientado a objetos, muy estructurado. |
| **Facilidad de uso**   | Fácil de aprender y usar.                                 | Requiere aprender un sistema de tipos estáticos, pero útil en proyectos grandes. | Relativamente fácil de aprender, con un enfoque más fuerte en la organización del código. |
| **Popularidad**        | Muy popular, estándar para desarrollo web.               | Popular en grandes proyectos, especialmente con Angular.            | Popularidad en crecimiento, especialmente con el uso de Flutter para apps móviles. |
| **Herramientas**       | Amplio ecosistema (React, Node.js, etc.).                | Mejor soporte en proyectos grandes gracias a su tipado estático.     | Se usa principalmente con Flutter para desarrollo móvil y web. |

**Uso de ejemplos o referencias para justificar la clasificación.**

Para que se puedan observar de manera clara las definiciones de la tabla, aqui dejo unos ejemplos para diferenciar que hace cada lenguaje script:

  - **JavaScript:**

    - JavaScript se usa para crear interactividad en páginas web:
    
    ```html
    <button onclick="alert('¡Hola, Mundo!')">Haz clic aquí</button>
    ```

  - **TypeScript:**

    - TypeScript agrega tipado estático para mejorar la detección de errores:
  
    ```typescript
    function sumar(a: number, b: number): number {
        return a + b;
    }
    ```

  - **Dart:**

    - Dart se usa con **Flutter** para aplicaciones móviles:
    
    ```dart
    void main() {
      runApp(MyApp());
    }

# Contestación y justificación de cambios en el código
## Manipulación del DOM: Código extraído de mi proyecto
- **Seleccionar y acceder a elementos del documento web utilizando diferentes métodos.**
  ```javascript
   // 1. SELECCIONAR ELEMENTOS DEL DOM
  const formulario = document.querySelector(".formulario form");
  console.log("Formulario seleccionado:", formulario);
  
  const tituloFormulario = document.querySelector(".formulario h2");
  console.log("Título del formulario antes del cambio:", tituloFormulario.textContent);
  
  const campoNombre = document.getElementById("nombre");
  console.log("Campo Nombre seleccionado:", campoNombre);
  

- **Crear y añadir nuevos elementos dinámicamente al documento.**
  ```javascript
  // 3. AÑADIR NUEVOS ELEMENTOS
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Déjanos tu mensaje y te responderemos lo antes posible.";
  document.querySelector(".formulario").insertBefore(nuevoParrafo, formulario);
  console.log("Nuevo párrafo agregado antes del formulario:", nuevoParrafo.textContent);


- **Modificar el contenido y atributos de elementos existentes.**
  ```javascript
  // 2. MODIFICAR CONTENIDO Y ATRIBUTOS
  tituloFormulario.textContent = "¡Queremos saber de ti!"; // Cambia el título del formulario
  console.log("Título del formulario después del cambio:", tituloFormulario.textContent);


- **Eliminar elementos de la página según criterios específicos.**
  ```javascript
  // Elimina el logo de Twitter si existe
  const twitterLogo = document.querySelector("a[aria-label='Twitter']");
  if (twitterLogo) {
      twitterLogo.parentElement.remove();
      console.log("El logo de Twitter ha sido eliminado.");
  } else {
      console.log("No se encontró el logo de Twitter.");
  }


- **Manipular estilos directamente desde JavaScript para modificar colores, tamaños o propiedades visuales según la interacción del usuario.**
  
  ```javascript
  1.
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

  2.
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

  3.
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

# Fase 3
Continuación del trabajo de nuestra heladería "Los Italianos";

En esta tercera parte deveremos de:
- Crear un sistema de galería interactiva donde las imágenes puedan añadirse o eliminarse dinámicamente.
- Diseñar un formulario con validación dinámica que muestre mensajes de error o éxito según la interacción del usuario.
- Implementar un sistema de filtros que permita mostrar u ocultar elementos de la página (por ejemplo, productos o entradas de blog) según criterios seleccionados por el usuario.
- Crear un flujo libre del proyecto.

Para poder realizar las actividades propuestas vamos a borrar la fase 2 y a implentar conocimientos más completos y no tan sencillos como los de la fase anterior.
