
$(document).ready(function () {
    // Escucha el clic en los elementos de la lista.
    $("#product-selector li").click(function () {
        // Obtiene el número del ID del elemento clicado.
        var clickedId = $(this).attr("id").match(/\d+/)[0];

        // Remueve la clase "active" de todos los elementos de la lista.
        $("#product-selector li").removeClass("active");

        // Agrega la clase "active" al elemento clicado.
        $(this).addClass("active");

        // Oculta todos los elementos de información que no tengan la clase "d-none" con una animación fadeOut.
        $(".info:not(.d-none)").fadeOut(function () {
            $(this).addClass("d-none");

            // Muestra el elemento de información correspondiente al número clicado con una animación fadeIn.
            $("#info-product-" + clickedId).removeClass("d-none").hide().fadeIn();
        });
    });
});



$(document).ready(function () {
    // Escucha el clic en los elementos de la lista.
    $("#product-selector-2 li").click(function () {
        // Obtiene el número del ID del elemento clicado.
        var clickedId = $(this).attr("id").match(/\d+/)[0];

        // Remueve la clase "active" de todos los elementos de la lista.
        $("#product-selector-2 li").removeClass("active");

        // // Agrega la clase "active" al elemento clicado.
        $(this).addClass("active");

        // Oculta todos los elementos de información que no tengan la clase "d-none" con una animación fadeOut.
        $(".info-2:not(.d-none)").fadeOut(function () {
            $(this).addClass("d-none");

            // Muestra el elemento de información correspondiente al número clicado con una animación fadeIn.
            $("#info-product-2-" + clickedId).removeClass("d-none").hide().fadeIn();
        });
    });
});


$(document).ready(function () {
    var header = $("header");
    var contactHeader = $(".contact-header");
    var contactHeaderHeight = contactHeader.height();

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > contactHeaderHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });
});


$(document).ready(function () {
    // Calcular la altura del encabezado
    var headerHeight = $("header").height();

    // Escucha los clics en los enlaces internos
    $("a[href^='#']").on("click", function (e) {
        e.preventDefault();

        var targetId = $(this).attr("href");
        var targetElement = $(targetId);

        if (targetElement.length) {

            var header = document.querySelector("header");
            var tops;

            if (window.innerWidth <= 468) {
                if (header.classList.contains("fixed")) {
                    tops = 20;
                } else {
                    tops = 80;
                }
            } else {
                if (header.classList.contains("fixed")) {
                    tops = 50;
                } else {
                    tops = 110;
                }
            }

            // Obtén la posición del elemento de destino
            var targetPosition = targetElement.offset().top - tops;

            // Aplica un desplazamiento adicional para evitar que el encabezado bloquee el contenido
            var offset = headerHeight;

            // Realiza el desplazamiento suave
            $("html, body").animate({
                scrollTop: targetPosition - offset
            }, 500);
        }
    });
});

ScrollReveal().reveal('#introduction');
ScrollReveal().reveal('#nosotros');
ScrollReveal().reveal('#products');
// ScrollReveal().reveal('#beneficts');
ScrollReveal().reveal('#contact');



function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comments = document.getElementById('comments').value;

    if (name.trim() === '' || email.trim() === '' || comments.trim() === '') {
        alert('Por favor, complete todos los campos.');
        return false;
    }

    // Si llegamos aquí, todos los campos están llenos. Agregamos la clase d-none al botón.
    document.getElementById('submitButton').classList.add('d-none');
    document.getElementsByClassName('loader').classList.remove('d-none');

    return true; // Permite el envío del formulario.
}