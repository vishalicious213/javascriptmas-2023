const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = new Date("Dec 25, 2023 00:00:00")
    // Task:
    // - Get today's date (you only need the day).
    const date = new Date()
    // - Calculate remaining days.
    let day = christmas.getDate() - date.getDate()
    // - Display remaining days in countdownDisplay.
    countdownDisplay.innerText = day
}

renderCountdown()

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2023.