$(document).ready(function () {
    const posts = $('#posts');
    const estilos = document.querySelectorAll('.estilo');

    $('.bxslider').bxSlider();

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

    estilos.forEach(btn => {
        btn.addEventListener('click', function () {
            console.log("click", this.id);
        });
    })
});