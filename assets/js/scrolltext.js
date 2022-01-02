$(document).on("scroll", function ()
{
    var defaultScroll = -20;
    var totalScroll = -2000;

    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
    var scrollPercent = (s / (d - c));
    $(".projects-header").css("marginLeft", (defaultScroll + totalScroll * scrollPercent + "px"));
});
