$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar
        if (this.scrollY > 20) {
            $('header').addClass("sticky");
        } else {
            $('header').removeClass("sticky");
        }
    });

    //  hamburgermenu
    $('.menu-btn').click(function () {
        $('.navbar .navbar__menu').toggleClass("active");
    });

    $('.navbar__menu li a').click(function () {
        $('.navbar .navbar__menu').removeClass("active");
    });

    // typing text script
    var typed = new Typed(".typing", {
        strings: ["Glyphica.css", "free typographyic library"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });
});