(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($("#spinner").length > 0) {
                $("#spinner").removeClass("show");
            }
        }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".sticky-top").addClass("shadow-sm").css("top", "0px");
        } else {
            $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });
    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    $(document).click(function (event) {
        var clickOver = $(event.target);
        var navbar = $("#navbarCollapse");
        var toggle = $("#navbar-toggle");

        if (
            navbar.hasClass("show") &&
            !clickOver.hasClass("navbar") &&
            !clickOver.hasClass("navbar-toggler") &&
            !clickOver.parents(".navbar").length
        ) {
            toggle.click();
        }
    });

    document.getElementById("year").innerHTML = new Date().getFullYear();
})(jQuery);
