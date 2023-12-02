const countdownDisplay = document.getElementById("countdown-display")
const countdownDetails = document.getElementById("countdown-details")

function renderCountdown(){
    const christmas = new Date("Dec 25, 2023 00:00:00")
    const date = new Date()

    let day = christmas.getDate() - date.getDate()
    countdownDisplay.innerText = day
}

function updateCountdown() {
    const now = new Date()
    console.log(24 - now.getHours())
    console.log(60 - now.getMinutes())
}

renderCountdown()
setInterval(updateCountdown, 1000)

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2023.