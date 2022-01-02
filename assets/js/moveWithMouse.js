$(document).ready(function ()
{
    $("#blue-circle-mouse-over").mousemove(function(event)
    {
        let circle = document.getElementById('blue-circle');
        let circleElement = document.querySelector('#blue-circle');
        let circleWidth = circleElement.offsetWidth;
        let circleHeight = circleElement.offsetHeight;

        let newTop = event.offsetY - (circleHeight / 2);
        let newLeft = event.offsetX - (circleWidth / 2);

        if (newTop < -100){
            newTop = -100;
        }
        if (newTop > (circleHeight / 2) - 150){
            newTop = (circleHeight / 2) - 150;
        }
        if (newLeft < -50){
            newLeft = -50;
        }

        circle.style.top = newTop + 'px';
        circle.style.left = newLeft + 'px';
    });
});