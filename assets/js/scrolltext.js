$(document).on("scroll", function ()
{
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    var scrollPercent = (s / (d - c));
    $(".projects-header").css("marginLeft", (-2000 * scrollPercent + "px"));
});