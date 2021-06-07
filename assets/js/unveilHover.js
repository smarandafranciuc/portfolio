function flipCards(){
    console.log(document.body.style.backgroundImage);
    if(theme == 0) {
        theme = 1;
        document.body.style.backgroundImage="url('media/background_earth.png')";
        document.getElementById("planet").src = 'media/planet_earth.png';
        document.getElementById("comet").src = 'media/airplane.png';
        document.getElementById("text-clock").style="color: rgba(0, 0, 0, 0); -webkit-text-stroke: 3px #3E468B;";
        document.getElementById("subtext-clock").innerText = "GMT";
        document.getElementById("subtext-clock").style="color:#3E468B";
        document.getElementById("text-date").style="-webkit-text-stroke: 1px #3E468B;";
    }else{
        theme = 0;
        document.body.style.backgroundImage="url('media/background_mars.png')";
        document.getElementById("planet").src = 'media/planet_mars.png';
        document.getElementById("comet").src = 'media/comet.png';
        document.getElementById("text-clock").style="color:#DBE1E1";
        document.getElementById("subtext-clock").innerText = "MARS TIME";
        document.getElementById("subtext-clock").style="color:#DBE1E1";
        document.getElementById("text-date").style="-webkit-text-stroke: 1px #DBE1E1;";
    }
}