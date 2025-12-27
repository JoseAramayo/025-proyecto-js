$(document).ready(function () {
    const article = $('.post');

    $('.bxslider').bxSlider();

    const posts = [
        {
            titulo: "Primer post",
            contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis, est ac tristique posuere, turpis justo ornare turpis, vitae cursus diam erat in nunc. Vivamus velit lacus, dapibus id est nec, aliquam efficitur eros. Etiam porttitor fermentum eleifend. Nam quis vehicula purus. Nam auctor sapien turpis, eget hendrerit orci condimentum vitae. Etiam in erat purus. Curabitur ut condimentum arcu. Nulla laoreet lacus lacus, nec luctus quam eleifend vel. Nam sollicitudin, odio ut aliquet luctus, eros tellus aliquet nibh, non malesuada lectus mauris nec nulla. Pellentesque elit tortor, tincidunt vel ornare ut, vulputate non est. Proin non cursus nibh. Nam a dolor laoreet, lobortis eros eu, placerat erat. Suspendisse lacinia nisl lectus, iaculis vestibulum lacus malesuada vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            fecha: "2025-12-20"
        },
        {
            titulo: "Segundo post",
            contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis, est ac tristique posuere, turpis justo ornare turpis, vitae cursus diam erat in nunc. Vivamus velit lacus, dapibus id est nec, aliquam efficitur eros. Etiam porttitor fermentum eleifend. Nam quis vehicula purus. Nam auctor sapien turpis, eget hendrerit orci condimentum vitae. Etiam in erat purus. Curabitur ut condimentum arcu. Nulla laoreet lacus lacus, nec luctus quam eleifend vel. Nam sollicitudin, odio ut aliquet luctus, eros tellus aliquet nibh, non malesuada lectus mauris nec nulla. Pellentesque elit tortor, tincidunt vel ornare ut, vulputate non est. Proin non cursus nibh. Nam a dolor laoreet, lobortis eros eu, placerat erat. Suspendisse lacinia nisl lectus, iaculis vestibulum lacus malesuada vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            fecha: "2025-12-15"
        },
        {
            titulo: "Tercer post",
            contenido: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis, est ac tristique posuere, turpis justo ornare turpis, vitae cursus diam erat in nunc. Vivamus velit lacus, dapibus id est nec, aliquam efficitur eros. Etiam porttitor fermentum eleifend. Nam quis vehicula purus. Nam auctor sapien turpis, eget hendrerit orci condimentum vitae. Etiam in erat purus. Curabitur ut condimentum arcu. Nulla laoreet lacus lacus, nec luctus quam eleifend vel. Nam sollicitudin, odio ut aliquet luctus, eros tellus aliquet nibh, non malesuada lectus mauris nec nulla. Pellentesque elit tortor, tincidunt vel ornare ut, vulputate non est. Proin non cursus nibh. Nam a dolor laoreet, lobortis eros eu, placerat erat. Suspendisse lacinia nisl lectus, iaculis vestibulum lacus malesuada vel. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            fecha: "2025-12-30"
        }
    ];

    moment.locale('es');
    posts.forEach((item, index) => {
        const fechaFormateada = moment(item.fecha).format('DD [de] MMMM [de] YYYY');
        console.log(fechaFormateada);
        const postHTML = `
        <h2>${item.titulo}</h2>
        <span class="fecha-publicacion">${fechaFormateada}</span>
        <p>${item.contenido}</p>`;
        article.append(postHTML)
    });
});