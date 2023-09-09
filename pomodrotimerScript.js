


document.addEventListener("DOMContentLoaded", function () {
    const timerDisplay = document.getElementById("timer-display");
    const startButton = document.getElementById("start-button");
    const pauseButton = document.getElementById("pause-button");
    const resetButton = document.getElementById("reset-button");

    let timer;
    let minutes = 25;
    let seconds = 0;
    let isRunning = false;

    function updateDisplay() {
        timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }

    function startTimer() {
        if (!isRunning) {
            timer = setInterval(function () {
                if (minutes === 0 && seconds === 0) {
                    clearInterval(timer);
                    timerDisplay.textContent = "00:00";
                    isRunning = false;
                    alert("Time's up! Take a 5-minute break.");
                    minutes = 5; // Set break time to 5 minutes
                    seconds = 0;
                    updateDisplay();
                    startButton.textContent = "Start";
                    return;
                }

                if (seconds === 0) {
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }

                updateDisplay();
            }, 1000);
            isRunning = true;
            startButton.textContent = "Pause";
        } else {
            clearInterval(timer);
            isRunning = false;
            startButton.textContent = "Resume";
        }
    }

    function resetTimer() {
        clearInterval(timer);
        isRunning = false;
        minutes = 25; // Reset to 25 minutes
        seconds = 0;
        updateDisplay();
        startButton.textContent = "Start";
    }

    startButton.addEventListener("click", startTimer);
    pauseButton.addEventListener("click", startTimer);
    resetButton.addEventListener("click", resetTimer);

    updateDisplay();
});



firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace('index.html')
    }
})
