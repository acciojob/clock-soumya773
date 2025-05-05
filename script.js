//your JS code here. If required.
function updateTimer() {
    const timerElement = document.getElementById("timer");
    const now = new Date();
    timerElement.innerText = now.toLocaleString(); // Formats date and time
}

// Call updateTimer every second
setInterval(updateTimer, 1000);

// Call once immediately so it doesn't wait 1 second to appear
updateTimer();
