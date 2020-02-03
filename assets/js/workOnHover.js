$(document).ready(function ()
{
    $(".workItem").hover(
        function()
        {
            var item = $(this);

            // Show text
            $(item).find(".workItemText").show();

            // Swap image source to altsource
            var itemImage = $(item).find(".workItemImage");
            var source = itemImage.attr("src");
            var altsource = itemImage.attr("altsrc");
            itemImage.attr("src", altsource);
            itemImage.attr("altsrc", source);
        },
        function()
        {
            var item = $(this);

            // Hide text
            $(item).find(".workItemText").hide();

            // Swap image source to altsource
            var itemImage = $(item).find(".workItemImage");
            var source = itemImage.attr("src");
            var altsource = itemImage.attr("altsrc");
            itemImage.attr("src", altsource);
            itemImage.attr("altsrc", source);
        }
    );
});
