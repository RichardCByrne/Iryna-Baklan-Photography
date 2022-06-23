$(document).ready(function () {
    // Desktop Navigation Sub Menu Visibility
    
    $("#projects").mouseover(function() {
        $("#projects-sub").css("visibility", "visible");
    });

    $("#projects").mouseleave(function () {
        $("#projects-sub").css("visibility", "hidden");
    });

    if ($("#projects-sub").css("visibility", "visible")) {
        $("#projects-sub > li").mouseover(function() {
            $("#projects-sub").css("visibility", "visible");
        });
        $("#projects-sub > li").mouseleave(function () {
            $("#projects-sub").css("visibility", "hidden");
        });
    } else {
        $("#projects-sub").css("visibility", "hidden");
    }

    $("#projects-sub").css("visibility", "hidden");

    // Mobile Burger Icon
    // Show
    $("#burger").click(function () {
        let sidebar = $(".sidebar");
        
        sidebar.css("display", "block");
        sidebar.animate({width: "29rem"}, ".1s");

        $("#close").css("display", "flex");
        $("#close").css("visibility", "visible");
    });

    // Close
    $("#close").click(function () {
        let sidebar = $(".sidebar");
        sidebar.animate({width: "0"}, ".1s");

        setTimeout(() => {
            sidebar.css("display", "none");
            $("#close").css("display", "none");
            $("#close").css("visibility", "hidden");
        }, 400);
    });

    // Image No Right Click
    $("html").click(function(e) {
        if (e.button === 2) {
            return false;
        }
    });

    // Image Modal
    // Initialise Swiper
    const swiper = new Swiper(".swiper", {
        // effect: "fade",
        slidesPerView: 1,
        centeredSlides: true,
        grabCursor: true,
        hashNavigation: {
            watchState: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    // Get clicked-on image's source
    $(document).click(function(e) {
        const isNotHomepage = (!window.location.href.endsWith("index.html") || !window.location.pathname.endsWith("/"));
        if (isNotHomepage) {
            const element = e.target;
            if (element.nodeName === "IMG") {
                const modal = $(".modal");
                const close = $(".close")[0];
                
                modal.css("display", "block");

                close.onclick = function() {
                    modal.css("display", "none");
                };
            }
        }
    });
});