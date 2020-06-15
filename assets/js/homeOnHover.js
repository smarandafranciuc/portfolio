$(document).ready(function ()
{
    $("#whoButton").hover(
        function()
        {
            // Swap image source to altsource
            var source = $("#whoImage").attr("src");
            var altsource = $("#whoImage").attr("altsrc");
            $("#whoImage").attr("src", altsource);
            $("#whoImage").attr("altsrc", source);
        },
        function()
        {
            // Swap image source to altsource
            var source = $("#whoImage").attr("src");
            var altsource = $("#whoImage").attr("altsrc");
            $("#whoImage").attr("src", altsource);
            $("#whoImage").attr("altsrc", source);
        }
    );

    $("#contactButton").hover(
        function()
        {
            // Set all images to blurry except for this one
            $("#home").children().children().addClass("blurry");
            $("#contactImage").removeClass("blurry");
        },
        function()
        {
            // Remove blurry from all
            $("#home").children().children().removeClass("blurry");
        }
    );

    $("#processButton").hover(
        function()
        {
            // Invert the image
            $("#processImage").addClass("flipVert");
        },
        function()
        {
            // Reset image
            $("#processImage").removeClass("flipVert");
        }
    );

    $("#workButton").hover(
        function()
        {
            // Show drop shadow and make screen black
            /*$("body").addClass("whiteout");
            $("#home").find("a").hide();*/
            $("#workButton").show();
        },
        function()
        {
            // Reset home
            /*$("body").removeClass("whiteout");*/
            $("#home").find("a").show();
        }
    );
});
