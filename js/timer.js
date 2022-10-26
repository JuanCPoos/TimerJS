let inputs, clock, alarm, hours, minutes, seconds, repeater;

window.addEventListener('load', () => {
    inputs = Array.from(document.getElementsByClassName('number'));
    clock = document.querySelector('.clock');
    alarm = new Audio('sound/alarma.mp3');
});

function startTimer() { 
    //Leer inputs
    parseTime();
    // actualizar vista, al valor ingrtesado por usuario
    setTimer();
    // Arrancar el timer
    countdown();


}

function parseTime() { 
    /* transformamos los valores de string ingresados por input
    a valores Number*/
    hours = Number(inputs[0].value);
    minutes = Number(inputs[1].value);
    seconds = Number(inputs[2].value);
}

function setTimer() {
    /** actualiza la pantalla con hs-min-seg
    y actualiza también el title de la pestaña*/
    clock.innerHTML = `<p class="number">${hours > 9 ? hours : ('0' + hours)}</p><span>hs</span> 
    <p class="number">${minutes > 9 ? minutes : ('0' + minutes)}</p><span>min</span>
    <p class="number">${seconds > 9 ? seconds : ('0' + seconds)}</p><span>sec</span>`;

    document.title = `${hours > 9 ? hours : ('0' + hours)}:${minutes > 9 ? minutes : ('0' + minutes)}:${seconds > 9 ? seconds : ('0' + seconds)}`;
}

function countdown() {
    // da inició al contador.
    repeater = setInterval(runner, 1000)
}
 
function runner(){ 
/** calcula el tiempo que falta para hacer sonar la alarma y llama 
 * a la función setTimer() para actualizar pantalla y title del document-
 * además hace sonar la alarma una vez cumplido el plazo ingresado.
*/
    if (seconds > 0) {
        seconds--;    
    } else {
        if (minutes > 0) {
            seconds = "59";
            minutes--;            
        }else {
            if (hours > 0) {
                seconds = "59";
                minutes = "59";
                hours--;
            } else {
                alarm.play();
            }
        }            
    }
    setTimer();
}

function stopTimer() { 
    // con reload de la pagina no sería necesario limíar el intervalo. 
    clearInterval(repeater);
    location.reload();
}


