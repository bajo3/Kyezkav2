var audio = document.getElementById("myAudio");
    
function pauseAudio() {
    var icon = document.querySelector('.fas'); // selecciona el elemento icono
    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play'); // quita la clase fa-play
        icon.classList.add('fa-pause'); // agrega la clase fa-pause
    } else {
        audio.pause();
        icon.classList.remove('fa-pause'); // quita la clase fa-pause
        icon.classList.add('fa-play'); // agrega la clase fa-play
    }
}