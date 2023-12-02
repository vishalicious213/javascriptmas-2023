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
    const hours = 24 - now.getHours()
    const mins = 60 -now.getMinutes()
    const secs = 60 -now.getSeconds()

    if (now.getMonth() >= 11 && now.getDate() >= 25) {
        countdownDetails.innerText = "2023 Christmas is done!"
    } else {
        countdownDetails.innerHTML = `
            <section>
                <div>
                    <div class="time-detail">${hours}</div>
                    <div>Hours</div>
                </div>
                :
                <div>
                    <div class="time-detail">${mins}</div>
                    <div>Minutes</div>
                </div>
                :
                <div>
                    <div class="time-detail">${secs}</div>
                    <div>Seconds</div>
                </div>
            </section>
        `
    }
}

renderCountdown()
setInterval(updateCountdown, 1000)

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2023.