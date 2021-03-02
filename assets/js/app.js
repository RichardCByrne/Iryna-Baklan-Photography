$(document).ready(function () {
    //Desktop Navigation Sub Menu Visibility
    
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

    //Mobile Burger Icon
    //Show
    $("#burger").click(function () {
        let sidebar = $(".sidebar");
        sidebar.css("display", "block");
        sidebar.animate({width: "20rem"}, ".1s");

        $("#close").css("display", "flex");
        $("#close").css("visibility", "visible");
    })
    //Close
    $("#close").click(function () {
        let sidebar = $(".sidebar");
        sidebar.animate({width: "0"}, ".1s");

        setTimeout(() => {
            sidebar.css("display", "none");
            $("#close").css("display", "none");
            $("#close").css("visibility", "hidden");
        }, 400)
    })

    //Img No Click
    $("img").click(function(e) {
        if (e.button === 2) {
            return false;
        }
    })
});