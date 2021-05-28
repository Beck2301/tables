
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using anime.js
    $('a.toplogo[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").on('click', function () {
        $(".navbar-collapse").collapse("hide");
    });


    $(".js-scroll-trigger").on('click', function () {
        $(".but").toggleClass("not-active");
    });


    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).on('scroll', navbarCollapse);

})(jQuery); // End of use strict



//cambio de icono


// esta parte, permite que se ejecute el codigo cuando se halla cargado la pagina
$(function () {
    // esta parte es la que controla cuando se mueve el scroll y ejecuta una función
    $(document).scroll(function () {
        // aca se pregunta si el scroll se movio de para bajo.
        if ($(this).scrollTop() > 1) {
            // esta parte cambia el atributo "src" de la etiqueta "img" 
            $('#logo').attr({ 'src': 'images/luna-final.png', 'style': 'height: 60px;' });
            $('#boton1').attr('class', 'linea2');
            $('#boton2').attr('class', 'linea2');
            $('#boton3').attr('class', 'linea2');

        }
        if ($(this).scrollTop() < 1) {
            $('#logo').attr({ 'src': './images/text-logo-4.png', 'style': 'height: 80px;' });
            $('#boton1').attr('class', 'linea');
            $('#boton2').attr('class', 'linea');
            $('#boton3').attr('class', 'linea');
        }

    });
});

//obtener año js
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;


//cambiar fondo 

$(document).ready(function () {
    function changeElements() {
        if ($('header').hasClass('fade-in-image')) {
            $('header').removeClass('fade-in-image');
            $('header').addClass('fade-in-image2');
            //// Both methods will return a single element
            //const demoId = document.querySelector('#demo-id');
            //// Change the text of one element
            //demoId.textContent = 'se parte de la gremial que asocia a las empresas del sector TIC de El Salvador, con el objetivo de promover el desarrollo de El Salvador ';
            //const img = document.querySelector('#img');
            //img.setAttribute('src', 'images/TIC1-1.png');
            var imagen = document.getElementById("bg");
            imagen.style.backgroundImage = "url('images/TIC2-1.png')";


        }
        else {
            $('header').removeClass('fade-in-image2');
            $('header').addClass('fade-in-image');
            // Both methods will return a single element
            //const demoId = document.querySelector('#demo-id');
            //// Change the text of one element
            //demoId.textContent = ' ';
            //const img = document.querySelector('#img');
            //img.setAttribute('src', 'images/laptop.png');

            var imagen = document.getElementById("bg");
            imagen.style.backgroundImage = "url('images/TIC1-1.png')";


        }

    }
    setInterval(changeElements, 8000);



});

//wowjs start
new WOW().init();




var btn = $('.but');

btn.on('click', function () {
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
});