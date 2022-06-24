$(document).ready(function () {
    // ---------------------------------------------------------------------------- General
    
    // Image No Right Click
    $(document).click(function(e) {
        if (e.button === 2) {
            e.preventDefault();
            return false;
        }
    });

    // ---------------------------------------------------------------------------- Desktop Navigation Sub Menu Visibility
    
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

    // ---------------------------------------------------------------------------- Mobile Burger Icon
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

    // ---------------------------------------------------------------------------- Image Modal
    const isNotHomepage = (!window.location.href.endsWith("index.html") || !window.location.pathname.endsWith("/"));
    const modal = $(".modal");
    const close = $(".close")[0];

    // Initialise Swiper
    if (isNotHomepage) {
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
    }

    // Display modal when clicking on project image
    $(document).click(function(e) {
        if (isNotHomepage) {
            const element = e.target;            
            if (element.nodeName === "IMG") {      
                requestAnimationFrame(() => {
                    modal.css("display", "block");
                });          
            }
        }
    });

    // Close Modal
    close.onclick = function() {
        requestAnimationFrame(() => {
            modal.css("animation", "fadeout");
            modal.css("display", "none");
        });
    };
});