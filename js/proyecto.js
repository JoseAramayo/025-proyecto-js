$(document).ready(function () {
    const postsJson = [
        {
            titulo: "Primer post",
            contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis, est ac tristique posuere, turpis justo ornare turpis, vitae cursus diam erat in nunc. Vivamus velit lacus, dapibus id est nec, aliquam efficitur eros. Etiam porttitor fermentum eleifend. Nam quis vehicula purus. Nam auctor sapien turpis, eget hendrerit orci condimentum vitae. Etiam in erat purus. Curabitur ut condimentum arcu. Nulla laoreet lacus lacus, nec luctus quam eleifend vel. Nam sollicitudin, odio ut aliquet luctus, eros tellus aliquet nibh, non malesuada lectus mauris nec nulla. Pellentesque elit tortor, tincidunt vel ornare ut, vulputate non est. Proin non cursus nibh. Nam a dolor laoreet, lobortis eros eu, placerat erat. Suspendisse lacinia nisl lectus, iaculis vestibulum lacus malesuada vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            link: "#PrimerPost",
            fecha: "2025-12-20"
        },
        {
            titulo: "Segundo post",
            contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis, est ac tristique posuere, turpis justo ornare turpis, vitae cursus diam erat in nunc. Vivamus velit lacus, dapibus id est nec, aliquam efficitur eros. Etiam porttitor fermentum eleifend. Nam quis vehicula purus. Nam auctor sapien turpis, eget hendrerit orci condimentum vitae. Etiam in erat purus. Curabitur ut condimentum arcu. Nulla laoreet lacus lacus, nec luctus quam eleifend vel. Nam sollicitudin, odio ut aliquet luctus, eros tellus aliquet nibh, non malesuada lectus mauris nec nulla. Pellentesque elit tortor, tincidunt vel ornare ut, vulputate non est. Proin non cursus nibh. Nam a dolor laoreet, lobortis eros eu, placerat erat. Suspendisse lacinia nisl lectus, iaculis vestibulum lacus malesuada vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            link: "#SegundoPost",
            fecha: "2025-12-15"
        },
        {
            titulo: "Tercer post",
            contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis, est ac tristique posuere, turpis justo ornare turpis, vitae cursus diam erat in nunc. Vivamus velit lacus, dapibus id est nec, aliquam efficitur eros. Etiam porttitor fermentum eleifend. Nam quis vehicula purus. Nam auctor sapien turpis, eget hendrerit orci condimentum vitae. Etiam in erat purus. Curabitur ut condimentum arcu. Nulla laoreet lacus lacus, nec luctus quam eleifend vel. Nam sollicitudin, odio ut aliquet luctus, eros tellus aliquet nibh, non malesuada lectus mauris nec nulla. Pellentesque elit tortor, tincidunt vel ornare ut, vulputate non est. Proin non cursus nibh. Nam a dolor laoreet, lobortis eros eu, placerat erat. Suspendisse lacinia nisl lectus, iaculis vestibulum lacus malesuada vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            link: "#TercerPost",
            fecha: "2025-12-30"
        }
    ];


    if (window.location.href.indexOf("index") > -1) {
        $('.bxslider').bxSlider();
        const posts = $('#posts');
        moment.locale('es');
        postsJson.forEach((item, index) => {
            const fechaFormateada = moment(item.fecha).format('DD [de] MMMM [de] YYYY');
            const postHTML = `
        <article class="post">
            <h2>${item.titulo}</h2>
            <span class="fecha-publicacion">${fechaFormateada}</span>
            <p>${item.contenido}</p>
            <a href="${item.link}" class="boton-mas">Leer más</a>
        </article >`;
            posts.append(postHTML)
        });
    };

    if (window.location.href.indexOf("info-usuario") > -1) {
        $('#acordeon').accordion();
    };

    if (window.location.href.indexOf("reloj") > -1) {
        function actualizarReloj() {
            let reloj = moment().format("hh:mm:ss");

            $('#reloj').html(reloj);
        }
        setInterval(actualizarReloj, 1000);
    }

    if (window.location.href.indexOf("Contacto") > -1) {
        $.validate({
            lang: 'es',
            errorMessagePosition: "top",
            scrollToTopOnError: true
        });
        $("input[name='fecha-nacimiento']").datepicker();

    }


    const estilo = $('#estilo');
    $('.estilo').on('click', function () {
        const id = this.id;
        estilo.attr('href', `css/${id}.css`);
    });

    const irArriba = document.querySelector('.ir-arriba');
    irArriba.addEventListener('click', function (event) {
        event.preventDefault();
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });

    const form = document.querySelector('#form-login');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        localStorage.setItem('nombre_usu', nombre);
        alert('¡Has iniciado sesión correctamente como ' + nombre + '!');
        location.reload();
    });


    const nombreUsuario = localStorage.getItem('nombre_usu');

    if (nombreUsuario !== null && nombreUsuario !== undefined) {
        const parrafo = $('#about p');
        parrafo.html('<strong>Bienvenido:</strong> ' + nombreUsuario);
        parrafo.append('<br><a href="#" id="logout">Cerrar Sesión</a>');
        $('#login').hide();

        $('#logout').on('click', function (event) {
            event.preventDefault();
            localStorage.clear();
            alert('¡Has cerrado sesión correctamente!');
            location.reload();
        });
    }

});