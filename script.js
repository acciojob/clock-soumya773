document.addEventListener("DOMContentLoaded", function () {
    function updateTimer() {
        const timerElement = document.getElementById("timer");
        if (timerElement) {
            const now = new Date();
            timerElement.innerText = now.toLocaleString();
        }
    }

    // Call once immediately and every second after
    updateTimer();
    setInterval(updateTimer, 1000);
});
