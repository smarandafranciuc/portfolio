$(document).ready(function()
{
    $(".project-tile").hover(
        function()
        {
            $(this).addClass("project-tile-hover");

            index = $(this).attr("index");
            if (index == null) { return; }

            let children = $("#project-hover-items").children();
            for (let i = 0; i < children.length; i++) {
                if ($(children[i]).attr("index") == index) {
                    $(children[i]).show();
                }
            }
        },
        function()
        {
            $(this).removeClass("project-tile-hover");

            index = $(this).attr("index");
            if (index == null) { return; }

            let children = $("#project-hover-items").children();
            for (let i = 0; i < children.length; i++) {
                if ($(children[i]).attr("index") == index) {
                    $(children[i]).hide();
                }
            }
        }
    );
});
