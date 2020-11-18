$(document).ready(function () {
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
});