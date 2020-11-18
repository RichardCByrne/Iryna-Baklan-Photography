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
    };

    //Mobile Burger Icon
    //Show
    $("#burger").click(function () {
        $(".sidebar").css("width", "20rem").css("display", "block");
        $("#close").css("display", "flex");
        $("#close").css("visibility", "visible");
    })
    //Close
    $("#close").click(function () {
        $(".sidebar").css("width", "0").css("display", "none");
        $("#close").css("visibility", "hidden");
    })
});