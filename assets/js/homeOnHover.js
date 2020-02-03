$(document).ready(function ()
{
    $("#whoButton").hover(
        function()
        {
            // Show questionmark
            $("#whoQuestionMark").show();
        },
        function()
        {
            // Hide questionmark
            $("#whoQuestionMark").hide();
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
            $("body").addClass("blackify");
            $("#home").find("a").hide();
            $("#workButton").show();
        },
        function()
        {
            // Reset home
            $("body").removeClass("blackify");
            $("#home").find("a").show();
        }
    );
});
