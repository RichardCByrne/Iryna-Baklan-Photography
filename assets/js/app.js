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
    $(document).click(function(e) {
        if (e.button === 2) {
            e.preventDefault();
            return false;
        }
    });

    // Image Modal
    $(document).click(function(e) {
        const isNotHomepage = (!window.location.href.endsWith("index.html") || !window.location.pathname.endsWith("/"));
        if (isNotHomepage) {
            const modal = $(".modal");
            const element = e.target;
            
            if (element.nodeName === "IMG") {
                modal.css("animation", "fadein");
                modal.css("display", "block");
                let carousel = new Flickity(".main-carousel", {
                    // options
                    cellAlign: 'left',
                    imagesLoaded: true,
                    contain: true,
                    wrapAround: false,
                    hash: true,
                    fade: true,
                    lazyLoad: 2,
                    percentPosition: false,
                    pageDots: false,
                    autoPlay: false,
                    fullscreen: true,
                  });
            }

            const close = $(".close")[0];
            close.onclick = function() {
                modal.css("animation", "fadeout");
                modal.css("display", "none");
            };
        }
    });
});