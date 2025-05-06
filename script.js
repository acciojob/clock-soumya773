function updateTimer() {
      const now = new Date();
      const timerElement = document.getElementById("timer");
      timerElement.textContent = now.toLocaleString();
    }

    updateTimer(); // Initial call to show time immediately
    setInterval(updateTimer, 1000); 